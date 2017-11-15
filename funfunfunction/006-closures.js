/* A closure is the combination of a function and the lexical environment within which that function was declared.

  Inner functions have access to the variables of outer functions

  In JS, functions are also closures such that the function body has access to variables that are defined outside the function (outer variable scope)

  UseCase example for closure..
*/
var me = 'Bruce Wayne'
function greetMe() {
  console.log('Hello, ' + me + "!") // refers to var outside of function scope!
}
greetMe()
me = 'Batman' // *actually* reads the variable at time of access from the outer scope - doesn't just copy/snapshot the value me at the time it was declared.
greetMe()

// illustates a good use of closures - ajax function
function sendRequest() {
  var requestID = '123'
  // standard ajax jquery function..
  $.ajax({
    url: '/myUrl',
    success: function(response) {
      alert('Request' + requestID + ' returned')
    }
  });
}

/* Mozilla has *super* good page on closures on their site; check out their example;
   Mozilla JavaScript documentation on Clousures
   https://developer.mozilla.org/en-US/d...
*/

/* Ex 2: displayName inner function is returned from the outer function before being executed */
function makeFunc() {
  var name = 'Mozilla 2';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

/* Ex 3: Closures 
   makeAdder is a function factory
   add5 and add10 are both closures. They share the same function body definition, but store different lexical environments
*/
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
