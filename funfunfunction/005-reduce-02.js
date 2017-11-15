// older style import..
const fs = require('fs')  // const instead of var because wont change
// modern javascript...
//import fs from 'fs'

// read from data file
var data = fs.readFileSync('data.txt')
console.log('data from file...', data)
var data222 = fs.readFileSync('data.txt', 'utf8')
console.log('data from file utf8..', data222)

// split into array of arrays - array of tokens seperated by line break i.e. lines, also splitting each line into array of token separated by ','
var data333 = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split(','))
console.log("data333...", data333)

/* Next use reduce to 
   remember that reduce takes two arguments; a function and an initial value/starting object..
   .. basic format is reduce((object_being_created, thing_being_iterated) => {}, 0)
*/
var data444 = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split(','))
  .reduce((customers,line) => {
    console.log('log each line being reduced..',line)
    customers[line[0]] = customers[line[0]] || [] // for each customer add to the array a property with their name as key and next push the values...
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      qty: line[3]
    })
    return customers
  },{})
console.log("data444...", data444)
console.log("stringified data444...", JSON.stringify(data444,null,2)) // two spaces for indentation

console.log("Reduce code size with 'assignment destructuring' with ES6 version...")
var data555 = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map((line) => line.split(','))
  .reduce((customers,[name,order,price,qty]) => {
    customers[name] = customers[name] || [] // for each customer add to the array a property with their name as key and next push the values...
    customers[name].push({order,price,qty})
    return customers
  },{})
console.log("data555...", JSON.stringify(data555,null,2))

