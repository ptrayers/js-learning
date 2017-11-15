var animals = [
  { name: 'Fluffy', species: 'cat'},
  { name: 'Snowy', species: 'cat'},
  { name: 'Baxter', species: 'cat'},
  { name: 'Sprite', species: 'dog'},
  { name: 'Twister', species: 'dog'},
  { name: 'Bugs', species: 'Rabbit'},
  { name: 'Mickey', species: 'Mouse'},
  { name: 'Donald', species: 'Duck'},
]

// traditional 'for loop' to display names
var names = []
for (var i = 0; i < animals.length; i++) {
   names.push(animals[i].name);
}

// 'for loop' example has more code...
console.log(names)

// use map to display names
var names222 = animals.map(function(animal) {
   return animal.name + ' is a ' + animal.species
})

// Map example (less code)...
console.log(names222)

// ECMAScript6 syntax
// arrow function '=>' syntax, remove return statement and curly brackets
// Note ES6 not fully integrated into browsers or nodeJS yet (but seems to work here)
var names333 = animals.map((animal) => animal.name + ' is a cool ' + animal.species) 
// common to shorten variable names to x...
// leaving a beautifully shorter higher order function...
var names444 = animals.map((x) =>x.name + 'is a cooler ' + x.species)

// Map example (even less code with ECMAScript6)...
console.log(names333)
console.log(names444)

