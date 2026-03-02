// Leetcode - Problem List - Problem 2634

function filter(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isTrue = fn(arr[i], i);
    if (isTrue) {
      result.push(arr[i]);
    }
  }
  return result;
}

const newArray = filter([0, 10, 20, 30], function greaterThan10(n) {
  return n > 10;
});
console.log(newArray);
const newArray2 = filter([1, 2, 3], function firstIndex(n, i) {
  return i === 0;
});
console.log(newArray2);
const newArray3 = filter([-2, -1, 0, 1, 2], function plusOne(n) {
  return n + 1;
});
console.log(newArray3);

// Detailed Explanation
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // Only push to the new array if the callback returns true
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Usage:
const evens = [1, 2, 3, 4].myFilter((num) => num % 2 === 0); // [2, 4]
