// Leetcode - Problem List - Problem 2635

function map(arr, fn) {
  var mapped = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    mapped[i] = fn(arr[i], i);
  }
  return mapped;
}

console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  }),
);
console.log(
  map([1, 2, 3], function plusI(n, i) {
    return n + i;
  }),
);
console.log(
  map([10, 20, 30], function constant() {
    return 42;
  }),
);

// Detailed Explanation
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // We pass the element, the index, and the original array to the callback
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Usage:
const doubled = [1, 2, 3].myMap((num) => num * 2); // [2, 4, 6]
