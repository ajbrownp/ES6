
function getMessageES5() {
  const yearES5 = new Date().getFullYear();
  return 'Using ES5: The year is ' + yearES5; // --------- ES5 code --------//
}

function getMessageES6() {
  const yearES6 = new Date().getFullYear();
  return `Using ES6: The year is ${yearES6}`; // --------- ES6 code --------//
}

// console.log(getMessageES5());
// console.log(getMessageES6());


///////////////////////////////////////////////////////////////////
////////    EXERCISE 1     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Refactor the function to use template strings

// function doubleMessage(number) {
//   return "Your number doubled is " + (2 * number);
// }

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}
// console.log(doubleMessage(5));  //Your number doubled is  10
