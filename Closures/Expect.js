// Leetcode - Problem List - Problem 2704

function expect(val) {
  return {
    toBe: function (value) {
      if (val === value) return true;
      else throw new Error("Not Equal");
    },
    notToBe: function (value) {
      if (val !== value) return true;
      else throw new Error("Equal");
    },
  };
}

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
