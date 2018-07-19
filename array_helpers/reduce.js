// sum every array element and add it to sum
// ---------- ES5 way to do it --------------//
var numbers = [10, 20, 30, 40, 50];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// console.log(sum);  //150

// -------- refactoring using ES6 reduce array helper ------------ //
var result = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
// console.log(sum);  //150

// ------------ Example 1--------------------/
// return an array with every color that exist in the array 'primaryColors'
var primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
];

var result = primaryColors.reduce(function(accumulator, primaryColor){
  accumulator.push(primaryColor.color);
  return accumulator;
}, []);
// console.log(result);   //[ 'red', 'yellow', 'blue' ]

// ------------ Example 2--------------------/
// check if the string have balanced parentesis

function balancedParens(string) { //here we will use the 'reduce' array helper so we need to convert the string that it's passed thru in an array, to do it we will use the 'split' function
    return !string.split('').reduce(function(previous, char){ //this method return 0 or 1 so, we can put the '!' symbol before 'string' to make the function return 'true' or 'false'
        if (char === '(') {
          return ++previous;
        }
        if (char === ')') {
          return --previous;
        }
        if (previous < 0) {
          return previous;
        }
        return previous;
    }, 0);
}

// console.log(balancedParens('(((()))'));  //false

///////////////////////////////////////////////////////////////////
////////    EXERCISE 1     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(prev, trip){
  prev += trip.distance;
  return prev;
}, 0);
//console.log(totalDistance); //47


///////////////////////////////////////////////////////////////////
////////    EXERCISE 2    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
// Hint: Don't forget to return the accumulator object (the first argument to the iterator function)

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(counter, desk) {
    if (desk.type === 'sitting') {
      ++counter.sitting;
    }
    else {
      ++counter.standing;
    }
    return counter;
}, { sitting: 0, standing: 0 });
//console.log(deskTypes);   //{ sitting: 3, standing: 2 }

///////////////////////////////////////////////////////////////////
////////    EXERCISE 3    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Write a function called 'unique' that will remove all the duplicate values from an array.
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce(function(acc, arrElem){
        if (!acc.find(accElem => accElem === arrElem)) {
          acc.push(arrElem);
        }
        return acc;
      }, []);
}

//console.log(unique(numbers));   //[ 1, 2, 3, 4 ]
