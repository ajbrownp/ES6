

const companies = [
  { name: 'Google', location: 'Mountain View'},
  { name: 'Facebook', location: 'Menlo Park'},
  { name: 'Uber', location: 'San Francisco'}
];

// get google's location
// ----- ES5 ----//
//
// var location = companies[0].location;
// console.log(location);//output 'Mountain View'

// ------refactoring with ES6 ----------//
///////////////////////////////////////////////////////////////////
////////    EXAMPLE 1    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// const [ location ] = companies;
// console.log(location); //output { name: 'Google', location: 'Mountain View' }

// const [{ location }] = companies;
// console.log(location); //output 'Mountain View'

///////////////////////////////////////////////////////////////////
////////    EXAMPLE 2    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

const Google = {
  location: ['Mountain View', 'New York', 'Miami']
};

const { location: [ location ]} = Google;
console.log(location); //output 'Mountain View'
