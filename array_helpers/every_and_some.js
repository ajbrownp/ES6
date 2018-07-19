// find is all the computers con run a program that need at least 16gb of ram
// ----- ES5 way to do it ------- //

var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Dell', ram: 4},
  {name: 'Lenovo', ram: 32}
];

var allPcCanRunProgram = true, onlySomePcCanRunProgram = false;
for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if (computer.ram < 16) {
    allPcCanRunProgram = false;
  }
  else {
    onlySomePcCanRunProgram = true;
  }
}
// console.log(allPcCanRunProgram) // false
// console.log(onlySomePcCanRunProgram) // true


// ------ refatoring this code using ES6 and the every array helper -----------//

var result = computers.every( computer => computer.ram > 16); // console.log(result) // false
 // if every single element of the array returns true, this will be treu, but if one of the elements return false the entire function will return false because the "every" helper will try to find if all the elements of the array satisfy the criteria.

// with the "some" array helper the function will try to target if any of the elements of the array satisfy de criteria, in this case the criteria is 16Gb of ram.

var result = computers.some(function(computer){
  return computer.ram > 16;
});
// console.log(result)    // true

// ------------ Example 1--------------------/

function Field(value){
  this.value = value;
};

Field.prototype.validate = function(){
  return this.value.length > 4;
};

var username = new Field('2cool');
var password = new Field('my_password');
var birthdate = new Field('05/04/1988');

var fields = [username,password,birthdate];

var result = fields.every( field => field.validate());
// console.log(result);

if (result) {
  // allow user to submit
}
else {
  // show error message
}

///////////////////////////////////////////////////////////////////
////////    EXERCISE 1     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every( user => user.hasSubmitted === true );
// console.log(hasSubmitted)   //false


///////////////////////////////////////////////////////////////////
////////    EXERCISE 2     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some( req => req.status === 'pending' );
// console.log(inProgress)    //true
