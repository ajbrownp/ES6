var users = [
  {
    name: 'Alex'
  },
  {
    name: 'Ashley'
  },
  {
    name: 'Jaden'
  },
  {
    name: 'Yanetsys'
  }
];

// Inspect an array to find a specific user
// ------- Normal way to doit using ES5 ----------- //

var user;
for (var i = 0; i < users.length; i ++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}
// console.log(user) // { name: 'Alex' }

// ----- Refactoring the code above with ES6, using the find array helper ---- //

var myName = users.find(function(user){ // find helper return de first element found within the comparison criteria
  return user.name === 'Alex';
});
// console.log(myName)  // { name: 'Alex' }

// ------------ Example 1 --------------------/

function Car(model){
  this.model = model;
}

var cars = [
  new Car('BMW'),
  new Car('AUDI'),
  new Car('MERCEDES')
];

var result = cars.find(function(car){
  return car.model === 'BMW';
});
// console.log(result)  // Car { model: 'BMW' }

// ------------ Example 2 --------------------/

var posts = [
  {
    id: 1,
    title: 'New Post'
  },
  {
    id: 2,
    title: 'Old Post'
  }
];

var comment = {
  postId: 1,
  content: 'Amazing Post'
};

function commentOfPost(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}
// console.log(commentOfPost(posts, comment)) // { id: 1, title: 'New Post' }


///////////////////////////////////////////////////////////////////
////////    EXERCISE 1     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(u => u.admin === true); // ""=>"" is called an arrow function, was introduced by ES6 but itsn't soported for older browsers, we can also write the same code as bellow

var admin = users.find(function(s){
  return s.admin === true;
});
// console.log(admin)  // { id: 3, admin: true }

///////////////////////////////////////////////////////////////////
////////    EXERCISE 2     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Find the account with a balance of 12 and assign it to the variable 'account'.
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(a => a.balance === 12);
// console.log(account)      // { balance: 12 }


///////////////////////////////////////////////////////////////////
////////    EXERCISE 3     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
// findWhere(ladders, { height: '20 feet' });
// The object { ladders: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';
//
// Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.
// In summary:
//
// var ladders = [
//   { id: 1, height: 20 },
//   { id: 3, height: 25 }
// ];

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

// solution 1
function findWhere(array, criteria) {
  return array.find(function(element){
      return element[Object.keys(criteria)[0]] === criteria[Object.keys(criteria)[0]];
  });
}
// solution 2
// function findWhere(array, criteria) {
//   return array.find(function(element){
//       return element.height === criteria.height;
//   });
// }

console.log(findWhere(ladders, {height:20 }));    // { id: 1, height: 20 }
