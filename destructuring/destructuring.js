// ----ES5 code --------//

var expense = {
  type: 'business',
  amount: '$45 USD'
};

// var type: expense.type;
// var amount = expense.amount;

// -- refactoring with ES6 ----//

const { type } = expense; //here { type } isn't an object, when we use the "{ }" st the left side of the "=" we are declaring the variable "type" and at the same time referencing the property "expence.type" in the object "expense".
const { amount } = expense;

// also with can do this
// const { type, amout} = expense;

console.log(type); // output "business"
console.log(amount); // output "$45 USD"
