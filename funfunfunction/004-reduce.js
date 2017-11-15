var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

// 'for loop' traditional method
var totalAmount = 0
for (var i=0; i<orders.length; i++) {
  totalAmount += orders[i].amount
}
console.log(totalAmount)

// reduce function
var totalAmount222 = orders.reduce(function(sum, order) {
  console.log("hello", sum, order)
  return sum + order.amount
}, 0)
console.log(totalAmount222)

// add lambda function
var totalAmount333 = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totalAmount333)
