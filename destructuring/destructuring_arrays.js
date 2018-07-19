// ---- ES5 -------//

const companies = [
  'Google',
  'Facebook',
  'Linkedin'
];

const firstCompany = companies[0]; // output [Google]

//---refactoring using ES6 ----//

const [name] = companies;  // output [Google]
// const [name, name2] = companies;  // output [Google, Facebook]
// const [name, name2, name3] = companies;  // output [Google, Facebook, Linkedin]
//
// const [name, ...rest] = companies;  // while ...rest will reference the rest of the elements of the array' [Facebook, Linkedin]'

const [otherName, ...rest] = companies

// console.log(name); //output 'GOOGLE'
// console.log(otherName, ...rest); //output 'GOOGLE, FACEBOOK, LINKEDIN'
