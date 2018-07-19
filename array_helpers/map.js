// Iterate numbers array and double each number, after that, add each doubled number to the array doubledNumbers

//------ ES5 way to do it -----//
var numbers = [1,2,3], doubledNumbers = [];

for (var i = 0; i < numbers.length; i ++) {
  doubledNumbers.push(numbers[i] * 2);
}
// console.log(doubledNumbers); //[2,4,6]

//-------- ES6 way using map array helper --------//
var doubled = numbers.map(function(number){  // create a new array called doubled to store doubled numbers
   return number * 2;    // return each doubled number that will be stored in the brand new array called 'doubled'
});
// console.log(doubled); //[2,4,6]


//--------------- EXAMPLE ------------------//
var cars = [
  { model: 'BMW', bodyType: 'coupe'},
  { model: 'Audi', bodyType: 'sedan'},
  { model: 'Chrysler', bodyType: 'minivan'},
  { model: 'Mercedes Benz', bodyType: 'suv'}
];

// get the body type of every single car on the array cars using map array helper

var bodyTypes = cars.map(function(car){
  return car.bodyType;
});
// console.log(bodyTypes); // [ 'coupe', 'sedan', 'minivan', 'suv' ]

///////////////////////////////////////////////////////////////////
////////    EXERCISE 1      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.  Don't forget to use the 'return' keyword in the function!
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
});
// console.log(heights); // [ '34px', '54px', '83px' ]

///////////////////////////////////////////////////////////////////
////////    EXERCISE 2      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    return trip.distance / trip.time;
});
// console.log(speeds); // [ 3.4, 1.8, 2.36 ]

///////////////////////////////////////////////////////////////////
////////    EXERCISE 3      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.
var colors = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'green'},
  { color: 'brown'}
];

function pluck(array, property) {
    return array.map(function(arrayElement){
        return arrayElement[property];  // in this case if we use arrayElement.property, the function will try to target the "property" key within the array wich doesn't exist.
    });
}

var result = pluck(colors, 'color');
// console.log(result); // [ 'red', 'blue', 'green', 'brown' ]
