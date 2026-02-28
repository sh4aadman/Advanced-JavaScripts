// Leetcode - Problem List - Problem 2620

function createCounter(n) {
  return () => n++;
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
