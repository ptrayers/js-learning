// higher order functions - functions that take other functions as their arguments

// create a function as a variable
//
var triple = function(x) {
  return x * 3;
}

// pass function around as a variable
//
var waffle = triple

var x = waffle(30);

console.log("Hello World", x);
