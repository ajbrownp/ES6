// promises are implemented inside of your browser already

// promise = new Promise((resolve, reject) => {
//   resolve();
// });
//
// promise
//   .then( () =>  console.log('all good!'))//used to register a callback when all was good
//   .then( () => console.log('now you can continue!'))
//   .catch( () =>  console.log('something went wrong!')); //used to register a callback when an error occured

  /************************************************************
  **********   practical example        **********************
  ***********************************************************/

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  promise
    .then( () =>  console.log('all good!'))//used to register a callback when all was good
    .then( () => console.log('now you can continue!'))
    .catch( () =>  console.log('something went wrong!')); //used to register a callback when an error occured
