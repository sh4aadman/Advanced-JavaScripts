// Leetcode - Problem List - Problem 2667

function createHelloWorld() {
  return () => "Hello World";
}

const f = createHelloWorld([{}, null, 42]);
console.log(f());
