// fetch are implemented inside of your browser already, we can use it to make ajax request and fetch resourses that are availables to us

// declare url to used
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
//  .then( data => console.log(data)) // this is an object that represents the response we got back from the server
  .then( response => response.json())
  .then ( data  => console.log(data))
  .catch( error => console.log('BAD', error)); // if server returns any code above '300' will not enter the 'catch' case
