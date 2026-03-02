// Leetcode - Problem List - Problem 2626

function reduce(nums, fn, init) {
    var value = init;
    for (var i = 0; i < nums.length; i++) {
        value = fn(value, nums[i]);
    }
    return value;
}

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0,
  ),
);
console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr * curr;
    },
    100,
  ),
);
console.log(
  reduce(
    [],
    function sum(accum, curr) {
      return 0;
    },
    25,
  ),
);

// Detailed Explanation
Array.prototype.myReduce = function(callback, initialValue) {
  // If no initialValue is provided, we use the first element of the array
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    // The accumulator is updated with the return value of each call
    accumulator = callback(accumulator, this[i], i, this);
  }
  
  return accumulator;
};

// Usage:
const sum = [1, 2, 3].myReduce((acc, curr) => acc + curr, 0); // 6
