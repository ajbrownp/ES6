var products = [
  {
    name: 'cucumber',
    type: 'vegetable',
    quantity: 1,
    price: 3
  },
  {
    name: 'banana',
    type: 'fruit',
    quantity: 6,
    price: 7
  },
  {
    name: 'apple',
    type: 'fruit',
    quantity: 15,
    price: 10
  }
];

// ---ES5 implementation to filter an array item that have type fruit------//
var filteredProducts = [];

for( var i = 0; i < products.length; i ++ ) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}
// console.log(filteredProducts); // [ { name: 'banana', type: 'fruit' },{ name: 'apple', type: 'fruit' } ]

// ----- ES6 implementation to filter an array item that have type fruit using the filter array helper------//
var onlyFruits = products.filter(function(product){
  return product.type === 'fruit';  // this will return a new array ith only the fruits that are type: 'fruits'
});
// console.log(onlyFruits); // [ { name: 'banana', type: 'fruit' },{ name: 'apple', type: 'fruit' } ]


//--------------- EXAMPLE 1 ------------------//
// Select elements with type 'fruit', quantity is greater than 5 and price is lees than 10
var result = products.filter(function(product){
    return product.type === 'fruit'
        && product.quantity > 5
        && product.price < 15
});
// console.log(result); // [ { name: 'banana', type: 'fruit', quantity: 6, price: 7 }, { name: 'apple', type: 'fruit', quantity: 15, price: 10 } ]


//--------------- EXAMPLE 2 ------------------//
// Select all comments of a given post
var post = { id: 4, title: 'Learning ES6'};
var comments = [
    {
      postId: 4,
      content: 'This is awesome'
    },
    {
      postId: 7,
      content: 'Hi there'
    },
    {
      postId: 4,
      content: 'Yahoooooo'
    }
];

function postComments(newPost, newComments){
  return newComments.filter(function(comment){
    return comment.postId === newPost.id;
  });
}

// console.log(postComments(post, comments)); // [ { postId: 4, content: 'This is awesome' }, { postId: 4, content: 'Yahoooooo' } ]


///////////////////////////////////////////////////////////////////
////////    EXERCISE 1      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});
// console.log(filteredNumbers); // [ 55, 65, 75, 85, 95 ]

///////////////////////////////////////////////////////////////////
////////    EXERCISE 2     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!
var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
   return user.admin === true;
});
// console.log(filteredUsers); // [ { id: 1, admin: true }, { id: 5, admin: true } ]

///////////////////////////////////////////////////////////////////
////////    EXERCISE 3     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////
//Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.
var numbers = [10, 20, 30, 40, 50];

function reject(array, iteratorFunction) {
  return array.filter(function(arrayElement){
     return !iteratorFunction(arrayElement);
  });
}
var lessThan30 = reject(numbers, function(number){
    return number > 25;
});

// console.log(lessThan30);// [ 10, 20 ]
