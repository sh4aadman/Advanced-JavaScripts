// Function - a reusable block of code that performs a specific task or calculates a value.

// Function definition - Named Function
function greet(name) {
  // "name" is parameter
  const greetings = "Hello, " + name + "!"; // variable defined inside - local scope - cannot be accessed from outside the function.
  return greetings; // The 'return' keyword sends a value back to the caller. If no return statement is present, the function implicitly returns undefined.
}

// Function invocation (calling the function)
let message = greet("World"); // "World" is argument
console.log(message); // Output: Hello, World!

// Standard named function are "hoisted" - they can be called before they are defined.

// Function expression - Anonymous Function
const multiply = function(a, b) {
  return a * b;
};
multiply(4, 2); // 8

// It must be defined before they can be called.

// Arrow function - modern ES6 feature
const add = (a, b) => a + b;
add(5, 3); // 8

// Can't be bound to <<this>>, <<super>> and <<arguments>>, or be used as a constructor.

// Lexically bound - from immediate parent scope - does not create its own <<this>> context

// Immediately Invoked Function Expression - IIFE
(function() {
  // code runs immediately
})();

// Create private scope for variables. Variables inside the IIFE can't be accessed anywhere on the code - encapsulation. (Legacy)

// A function can be created inside a function and can be returned from it.
function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7

// Higher-Order Function - accepts a function and/or returns a function
function log(inputFunction) {
    return function(...args) {
        console.log("Input", args);
        const result = inputFunction(...args);
        console.log("Output", result);
        return result;
    }
}
const m = log((a, b) => a + b);
m(1, 2); // Logs: Input [1, 2] Output 3