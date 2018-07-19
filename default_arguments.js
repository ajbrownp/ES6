///////////////////////////////////////////////////////////////////
////////    EXAMPLE 1    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// ------ not using default arguments ----------//

// function makeAjaxRequest(url, method) {
//   if (!method) {
//     method = 'GET';
//   }

  //logic to make the request
//}
function makeAjaxRequest(url, method = 'GET') {
  return method;
  }

// ------ using default arguments ----------//

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST '));

// console.log(makeAjaxRequest('google.com'  null)); if we want to do not reasing method to GET we can use null

///////////////////////////////////////////////////////////////////
////////    EXAMPLE 2    ///////////////////////////////////////
///////////////////////////////////////////////////////////////////

// function user(id) {
//   this.id = id;
// }
//
// function generateId() {
//   return Math.random() * 99999999;
// }
//
// function createAdminUser(user) {
//   user.admin = true;
//   return user;
// }
//
// console.log(createAdminUser( new user(generateId()))); //every time we call this function we must create a user fist

//------- refactoring using default arguments -----//

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 99999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}
//
// console.log(createAdminUser());

///////////////////////////////////////////////////////////////////
////////    EXERCISE 1      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Using Default Arguments
// Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
//
// function sum(a, b) {
//   if (a === undefined) {
//     a = 0;
//   }
//
//   if (b === undefined) {
//     b = 0;
//   }
//
//   return a + b;
// }

function sum(a = 0, b = 0) {
    return a + b;
}


///////////////////////////////////////////////////////////////////
////////    EXERCISE 2      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Dumping Unused Code
// Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.

// function addOffset(style) {
//   if (!style) {
//     style = {};
//   }
//
//   style.offset = '10px';
//
//   return style;
// }

function addOffset(style = {}) {
  style.offset = '10px';

  return style;
}
