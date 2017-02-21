// function add(a,b){
//   return a+b;
// }
//
// console.log(add(3,5));
//
// var toAdd = [3,15];

// var groupA = ['chatta', 'malia'];
// var groupB = ['sana'];
// var final = [3, ...groupA];
//
// console.log(final);

var person = ['Dulip', 32];
var personTwo = ['John', 28];

function greet(name, age){
  return "Hi "+name+" your age is "+age;
}

console.log(greet(...person));

var names = ['andy', 'magie'];
var final = ['dulip', ...names];

final.forEach(function(name){
  console.log("Hi "+name);
});
