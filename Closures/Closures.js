// Closures - In JavaScript, a closure is the combination of a function and its surrounding state (its lexical environment). It allows an inner function to retain access to variables and parameters from its outer function's scope, even after the outer function has finished executing.

// Example - 01
function createCounter() {
  let count = 0; // This variable is private to the createCounter function's scope

  return function increment() {
    count++;
    console.log(count);
  };
}

// When we call createCounter(), it returns the increment function.
const myCounter = createCounter();

// myCounter now holds the increment function, which "remembers" the 'count' variable.
myCounter(); // Output: 1
myCounter(); // Output: 2
myCounter(); // Output: 3


// Example - 02
function createAdder(a) {
    function f(b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createAdder(3);
console.log(f(4)); // 7

// Common Use Cases - Data privacy and encapsulation, function factories, asynchronous operations and event handlers, memoixation (store results of expensive function calls to improve performance).

// Data Encapsulation and Private Variables
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  return {
    deposit: (amount) => { balance += amount; },
    getBalance: () => balance,
  };
}
const myAccount = createBankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500
console.log(myAccount.balance); // Output: undefined

// Currying and Partial Application
function multiply(a) {
  return function(b) {
    return a * b; // 'a' is remembered via closure
  };
}
const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // Output: 10

// Memoization
function memoize(fn) {
  const cache = {}; // The cache is preserved in the closure
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key]; // Return cached result
    }
    const result = fn(...args);
    cache[key] = result; // Store the result
    return result;
  };
}

// Asynchronous Code and Event Handlers
function setupButton(buttonId, message) {
  document.getElementById(buttonId).addEventListener('click', function() {
    alert(message); // 'message' is retained by the closure
  });
}

