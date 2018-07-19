// THIS OPERATORS ARE USED TO CAPTURE ARGUMENTS
///////////////////////////////////////////////////////////////////
////////    EXAMPLE 1    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// function addNumbers(numbers) {
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0)
// };

// console.log(addNumbers([1,2,3,4,5])); // returns 15

//---------- USING REST OPERATOR ----//
function addNumbers(... numbers) { // to use the rest operator we use the "..." notation
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
};

// console.log(addNumbers( 1,2,3,4,5)); // returns 15

///////////////////////////////////////////////////////////////////
////////    EXAMPLE 2    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// ---- using spread operator ----//

const defaultColors = ['brown', 'black'];
const userFavColors = ['red', 'blue'];

// console.log([defaultColors.concat(userFavColors)]);// [ 'brown', 'black', 'red', 'blue' ]


// console.log([... defaultColors, ... userFavColors]);// [ 'brown', 'black', 'red', 'blue' ]
// console.log(['green',  ... defaultColors, ... userFavColors]);// [ 'green', 'brown', 'black', 'red', 'blue' ]

///////////////////////////////////////////////////////////////////
////////    EXAMPLE 3    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// want to always buy milk

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  return items;
}

//console.log(validateShoppingList('orange', 'bread', 'eggs')); //[ 'milk', 'orange', 'bread', 'eggs' ]

///////////////////////////////////////////////////////////////////
////////    EXAMPLE 4    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// const MathLibrary = {
//   calculateProduct(a, b){
//     return a * b;
//   }
// };

// rename "calculateProduct" method to "multiply" without affecting production
const MathLibrary = {
  calculateProduct(...rest){
    console.log('PLease use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b){
    return a * b;
  }
};

// console.log(MathLibrary.multiply(5, 4)); // 20



///////////////////////////////////////////////////////////////////
////////    EXERCISE 1      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Many, Many Arguments
// Refactor the following function to use the rest operator.
// Remember, an argument using the rest operator does *not* need to be called 'rest'.

// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];
//
//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
// console.log(product(1,2,3,4,5)); // 120


///////////////////////////////////////////////////////////////////
////////    EXERCISE 2      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Spreadin' Arrays
// Refactor the following to use the spread operator.

// function join(array1, array2) {
// return array1.concat(array2);
// }

function join(array1, array2) {
    return [...array1, ...array2];
}
// console.log(join([1,2,3],[5,6,7,8])); // [ 1, 2, 3, 5, 6, 7, 8 ]


///////////////////////////////////////////////////////////////////
////////    EXERCISE 3      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Mixing Rest and Spread
// Refactor the following to use the only the rest operator

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }
function unshift(array, ...items) {
  return [...items, ...array];
}

console.log(unshift(['f','g'], 'a', 'b', 'c', 'd', 'e'))  ; // output [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
