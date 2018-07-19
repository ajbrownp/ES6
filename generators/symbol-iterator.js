/************************************************************
********** without use symbol.iteretor **********************
***********************************************************/

// const testingTeam = {
// 	lead: 'Ashley',
//   tester: 'Yoky'
// };
//
// const engineeringTeam = {
//   testingTeam,
// 	size: 3,
//   department: 'Engineering',
//   lead: 'Jaden',
//   manager: 'Yane',
//   engineer: 'Alex'
// };
//
// function* teamIterator(team){
// 	yield team.lead;
//   yield team.manager;
//   yield team.engineer;
//   const testingTeamGenerator = testingTeamIterator(team.testingTeam); // delegation in process
//   yield* testingTeamGenerator; // iterate thru the secon generator
// }
//
// function* testingTeamIterator(team){
// 	yield team.lead;
//   yield team.tester;
// }
//
// const names = [];
// for	(let name of teamIterator(engineeringTeam)){
// 	names.push(name);
// }
// console.log(names); //[ 'Jaden', 'Yane', 'Alex', 'Ashley', 'Yoky' ]

/************************************************************
********** using symbol.iteretor **********************
***********************************************************/

// const testingTeam = {
// 	lead: 'Amanda',
//   tester: 'Bill',
//   [Symbol.iterator]: function* () { //know as 'key interpolation'
//   	yield this.lead;
//     yield this.tester;
//   }
// };
//
// const engineeringTeam = {
//   testingTeam,
// 	size: 3,
//   department: 'Engineering',
//   lead: 'Jill',
//   manager: 'Alex',
//   engineer: 'Dave'
// };
//
// function* teamIterator(team){
// 	yield team.lead;
//   yield team.manager;
//   yield team.engineer;
//   yield* team.testingTeam;
// }
//
// const names = [];
// for	(let name of teamIterator(engineeringTeam)){
// 	names.push(name);
// }
// console.log(names); // [ 'Jill', 'Alex', 'Dave', 'Amanda', 'Bill' ]

/************************************************************
**********    refactoring above code   **********************
***********************************************************/

const testingTeam = {
	lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
  	yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
	size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
  	yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for	(let name of engineeringTeam){
	names.push(name);
}
console.log(names); // [ 'Jill', 'Alex', 'Dave', 'Amanda', 'Bill' ]

/************************************************************
**********   practical example        **********************
***********************************************************/

class Comment {
 	 constructor(content, children) {
   		this.content = content;
     	this.children = children;
   }

  *[Symbol.iterator] () { // get content of current node and look if have any children
  	yield this.content;
    for (let child of this.children) {
    	yield* child; // if the node have any children, the iterate thru it
    }
  }
}

const children = [
	new Comment('good comment', []),
  new Comment('bad comment', []),
	new Comment('meh', [])
];

const tree = new Comment ('Great post', children);


const values = [];
for (let value of tree){
	values.push(value);
}

console.log(values); //[ 'Great post', 'good comment', 'bad comment', 'meh' ]

//***************************************************************************************//
// note: iterator av to be used with the for of loop, we can't use array helpers with it //
//***************************************************************************************//
