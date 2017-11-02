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

// (Old-style) filter out the cats
var cats = []
for (var i = 0; i < animals.length; i++ ) {
  if (animals[i].species === 'cat') 
    cats.push(animals[i]);
}

console.log('Animals..\n', animals);
console.log('Cats..\n', cats);

// Use filter to set a callback function 
// The callback function and filter function slot into each other, so are 'composable'
var cats222 = animals.filter(function(animal) {
  return animal.species == 'cat';
})

var isCat = function(animal) {
  return animal.species === 'cat'
}

var cats333 = animals.filter(isCat)
console.log('More filter Cats..\n', cats333)

// reject is opposite of filter, it is not built into the js language but is available in libraries such as underscore.js
// var otherAnimals = animals.reject(isCat)
//console.log('Filter Cats...\n', otherAnimals);
