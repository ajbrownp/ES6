// ------------- ES5 -----------//
// function Car(options){
//   this.title = options.title;
// };
//
// Car.prototype.drive = function() {
//   return 'vroom';
// };
//
// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }
//
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
//
// Toyota.prototype.honk = function(){
//   return 'beep';
// };
//
// const toyota = new Toyota({ color: 'red', title: 'driver'});
// console.log(toyota);  // Toyota { color: 'red' }
// console.log(toyota.drive()); //vroom
// console.log(toyota.honk()); // beep

// const car = new Car({title: 'BMW'});
//
// console.log(car.drive()); // vroom
// console.log(car); // Car { title: 'BMW' }



// --------- REFACTORING WITH ES6 ---------------//

class Car {
    //initializing the class

    // constructor(options){
    //   this.title = options.title;
    // }

    // but we can do this intead using destructuring
    constructor({ title }){
      this.title = title;
    }
    // adding methods to this class
    drive() {
      return 'vroom';
    }
}

class Toyota extends Car { // extends Car allow us to have in the class "Toyota" all properties and methods of the class "Car"
    constructor(options){ //here we can't do destructuring
      super(options); // this keyword is to run de constructor method of the class 'Car', is the same of 'Car.constructor()'
      this.color = options.color;
    }
    honk() {
      return 'beep';
    }
}

const car = new Car({ title: 'BMW' });
const toyota = new Toyota({ color: 'blue', title: 'Driving home' });
// console.log(car.drive());
// console.log(car);
// console.log(toyota.honk());
// console.log(toyota);
// console.log(toyota.drive());

// --------- WHEN TO USE 'CLASES' -------//
