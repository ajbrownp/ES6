///////////////////////////////////////////////////////////////////
////////    EXAMPLE 1      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

const points = [
  [4,7],
  [3,5],
  [6,9],
  [1,8]
];

// we need to return the data in an array of "x:y key:value" pairs
let result = points.map(([ x, y ]) => {
  return { x, y };
});

console.log(result); //output [ { x: 4, y: 7 }, { x: 3, y: 5 }, { x: 6, y: 9 }, { x: 1, y: 8 } ]

///////////////////////////////////////////////////////////////////
////////    EXERCISE 1      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.
// Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.
// Refactor this code to use destructuring. Can you get the body of the 'isEngineer' function down to a single line?

// const profile = {
//   title: 'Engineer',
//   department: 'Engineering'
// };
//
// function isEngineer(profile) {
//   var title = profile.title;
//   var department = profile.department;
//   return title === 'Engineer' && department === 'Engineering';
// }

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var {title} = profile;
  var {department} = profile;
  return title === 'Engineer' && department === 'Engineering';
}
console.log(isEngineer(profile));//true

///////////////////////////////////////////////////////////////////
////////    EXERCISE 2      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.
//
// An array for a class has the form [subject, time, teacher]
//
// The resulting data structure should look something like the following:
//
// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]

// const classes = [
//   [ 'Chemistry', '9AM', 'Mr. Darnick' ],
//   [ 'Physics', '10:15AM', 'Mrs. Lithun'],
//   [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
// ];
//
// const classesAsObject;

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([ subject, time, teacher]) => {
  return { subject, time, teacher};
});
console.log(classesAsObject);
// output
// [ { subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick' },
// { subject: 'Physics', time: '10:15AM', teacher: 'Mrs. Lithun' },
// { subject: 'Math', time: '11:30AM', teacher: 'Mrs. Vitalis' } ]

///////////////////////////////////////////////////////////////////
////////    EXERCISE 3      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.
// Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)
//
// Input:
//
// double([1,2,3])
//
// Output
//
// [2,4,6]
//
// Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is
// undefined do you need to keep walking through the array?

// const numbers = [1, 2, 3];
//
// function double() {
//
// }

const numbers = [1, 2, 3];
function double( [ number, ...rest ] ) {
 return number === undefined ? [] : [number * 2, ...double(rest)];
}

console.log(double([2,4,6])); // output [ 4, 8, 12 ]
