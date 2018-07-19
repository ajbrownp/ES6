// ---- ES5 ----//
const add = function(a,b){
  return a + b;
} ;
// console.log(add(1,5));   //6

// ------ refactoring with ES6 ---------///
const add1 = (a,b) => a + b;
// console.log(add1(1,5));  //6

// ----------- example 1 ---------------//
// ---- ES5 ----//
const double = function(number){
    return 2 * number;
};
// console.log(double(5));  //10

// ------ refactoring with ES6 ---------///
const doubl = numb => 2 * numb;
// console.log(doubl(10));  //20

// ----------- example 2 ---------------//
// ---- ES5 ----//
const numbers = [1,2,3];

numbers.map(function(num){
  return 2 * num;
});
// console.log(numbers);

// ------ refactoring with ES6 ---------///
numbers.map(mynumber => 2 * mynumber);
// console.log(numbers);


// ----------- example 3 ---------------//
// ---- ES5 ----//
// const team = {
//   members: ['Alex', 'Jaden'],
//   teamName: 'Super Team',
//   teamSummary: function (){
//     return this.members.map(function(member){
//       return `${member} is on team ${this.teamName}`;
//     });
//   }
// };

 // console.log(team.teamSummary()); // this call throw an error because "${this.teamName}" can't be read and we gt the following anwer [ 'Alex is on team undefined', 'Jaden is on team undefined' ]

// ------ refactoring with ES6 ---------///
const team = {
  members: ['Alex', 'Jaden'],
  teamName: 'Super Team',
  teamSummary: function (){
    return this.members.map((member) => { //here we use the lexical this property of the arrow function to solve the problem
      return `${member} is on team ${this.teamName}`;
    });
  }
};

console.log(team.teamSummary());

///////////////////////////////////////////////////////////////////
////////    EXERCISE 1    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.
//
// Refactor the code below to use a fat arrow function.  Remember the rules of fat arrow functions:
//
// If the function has a single expression in its body, the curly braces and 'return' keyword can be removed
// If the function has a single argument, the parentheses around the argument list can be removed

// const fibonacci = function(n) {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// ------ refactoring with ES6 ---------///
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
// console.log(fibonacci());


///////////////////////////////////////////////////////////////////
////////    EXERCISE 2    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Arrow Functions Aren't Always a Solution
// Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.
// The code below has an object that represents a users profile.  The profile has a 'name' currently.  Add another key
// to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.
//  Does the solution work with a fat arrow function or will you have to use a function keyword instead?

const profile = {
    name: 'Alex',
    getName: function(){
        return this.name;
    }
};
console.log(profile.getName());
