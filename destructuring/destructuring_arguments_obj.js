// ---- ES5 ----------//
var saveFile = {
  extension: 'jpg',
  name: 'jaden_ashley',
  size: 4517
};

// function fileSummary (file){
//   return `The file ${file.name}.${file.extension} is of the size ${file.size} MB`;
// };
//
// console.log(fileSummary(saveFile));  output "The file jaden_ashley.jpg is of the size 4517 MB"


// refactoring using ES6 ---//
function fileSummary ({ extension, name, size }){
  return `The file ${name}.${extension} is of the size ${size} MB`;
};

console.log(fileSummary(saveFile)); //output "The file jaden_ashley.jpg is of the size 4517 MB"
