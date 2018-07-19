// itereting through arrays of data

/******************************************
********** example 1 **********************
******************************************/
const colors = ['red', 'green', 'blue', 'brown', 'orange', 'pink'];

for (let color of colors) {
  // console.log(color);
}
/******************************************
********** example 2 **********************
******************************************/

const numbers = [1,2,3,4,5,6,7,8,9];
let total = 0;

for (let number of numbers) {
  total += number;
}
// console.log(total); //45

/******************************************
********** example 3 **********************
******************************************/
function* shopping () {
  //stuff on the sidewalk

  //walking down the sidewalk

  //go into the store with cash
  const stuffFromStore = yield 'cash';

  //walking to laundry place
  const cleanClothes = yield 'laudry';

  //walking back home
  return  [stuffFromStore, cleanClothes];
}

//stuff in the store
const gen = shopping();

gen.next(); //leaving our house
// walked into the store
// walking up and down the aisles ...
// purchase our stuffFromStore

gen.next('groceries'); //leaving the store with groceries

gen.next('clean clothes'); //leaving the laundry with clean clothes

/******************************************
********** example 4 **********************
******************************************/
function* myColors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

// const generator = myColors(); //create generator object
// generator.next(); //to enter the generator and execute the first 'yield' statement
// generator.next(); //re-enter the function and execute the next 'yield' statement
// generator.next();
// generator.next();

const colorsArray = [];
for (let color of myColors()) {
  colorsArray.push(color);
}

console.log(colorsArray); //[ 'red', 'blue', 'green' ]

/******************************************
********** example 5 **********************
******************************************/
const engineeringTeam = {
	size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

function* teamIterator(team){
	yield team.lead;
  yield team.manager;
  yield team.engineer;
}
const names = [];
for	(let name of teamIterator(engineeringTeam)){
	names.push(name);
}
console.log(names); //["Jill","Alex","Dave"]
