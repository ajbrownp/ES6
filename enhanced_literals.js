///////////////////////////////////////////////////////////////////
////////    EXAMPLE 1    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// ---- without use enhanced literals ----//
// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function() {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function(title) {
//       return this.inventory.find( book => book.title === title).price;
//     }
//   };
// }
//
// const inventory = [
//   { title: 'Harry Potter', price: 10 },
//   { title: 'The Black Hope', price: 25}
// ];
//
// const bookShop = createBookShop(inventory)
// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle('The Black Hope'));

// ---- refactoring using enhanced literals ----//
function createBookShop(inventory) {
  return {
    inventory, //eliminating "inventory" key:value pair
    inventoryValue() { //eliminating the ": function" part of the function
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) { //eliminating the ": function" part of the function
      return this.inventory.find( book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'The Black Hope', price: 25}
];

const bookShop = createBookShop(inventory)
// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle('The Black Hope'));

///////////////////////////////////////////////////////////////////
////////    EXAMPLE 2    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// ---- without use enhanced literals ----//
// function saveFile(url, data){
//   $.ajax({ method: 'POST', url: url, data: data }); //http request using jquery
// };
//
// const url = "http://fileupload.com";
// const data = { color: 'red'};

// ---- refactoring using enhanced literals ----//

function saveFile(url, data){
  $.ajax({ url, data, method: 'POST' }); //http request using jquery
};

const url = "http://fileupload.com";
const data = { color: 'red'};

///////////////////////////////////////////////////////////////////
////////    EXERCISE 1    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Multiple Properties with Enhanced Notation
// Refactor to use enhanced literal notation

// const red = '#ff0000';
// const blue = '#0000ff';
//
// const COLORS = { red: red, blue: blue };

// refactoring
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

///////////////////////////////////////////////////////////////////
////////    EXERCISE 2      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
//
// Condensing Code with Enhanced Literals
// Refactor the following to use enhance object literal syntax

// const fields = ['firstName', 'lastName', 'phoneNumber'];
//
// const props = { fields: fields }

 //refactoring

 const fields = ['firstName', 'lastName', 'phoneNumber'];

 const props = { fields }

 ///////////////////////////////////////////////////////////////////
 ////////    EXERCISE 3      ///////////////////////////////////////
 ///////////////////////////////////////////////////////////////////
//  Literals in Functions
// Refactor to use enhanced literal notation

// const canvasDimensions = function(width, initialHeight) {
//   const height = initialHeight * 9 /16;
//   return {
//     width: width,
//     height: height
//   };
// }

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width,
    height
  };
}

///////////////////////////////////////////////////////////////////
////////    EXERCISE 4      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Refactor to use enhanced literal notation

// const color = 'red';
//
// const Car = {
//   color: color,
//   drive: function() {
//     return 'Vroom!';
//   },
//   getColor: function() {
//     return this.color;
//   }
// };

const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
