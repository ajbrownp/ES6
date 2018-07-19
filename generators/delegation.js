/******************************************
********** example 1 **********************
******************************************/

const testingTeam = {
	lead: 'Ashley',
  tester: 'Yoky'
};

const engineeringTeam = {
  testingTeam,
	size: 3,
  department: 'Engineering',
  lead: 'Jaden',
  manager: 'Yane',
  engineer: 'Alex'
};

function* teamIterator(team){
	yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = testingTeamIterator(team.testingTeam); // delegation in process
  yield* testingTeamGenerator; // iterate thru the secon generator
}

function* testingTeamIterator(team){
	yield team.lead;
  yield team.tester;
}

const names = [];
for	(let name of teamIterator(engineeringTeam)){
	names.push(name);
}
console.log(names); //[ 'Jaden', 'Yane', 'Alex', 'Ashley', 'Yoky' ]
