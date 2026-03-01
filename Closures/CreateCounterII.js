// Leetcode - Problem List - Problem 2665

function createCounter(init) {
  var result = init;
  return {
    increment: () => {
      return ++result;
    },
    decrement: () => {
      return --result;
    },
    reset: () => {
      return (result = init);
    },
  };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

// Alternate Way:
function createCounter(init) {
  let presentCount = init;

  function increment() {
    return ++presentCount;
  }

  function decrement() {
    return --presentCount;
  }

  function reset() {
    return (presentCount = init);
  }

  return { increment, decrement, reset };
}

// Class Way:
class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    this.presentCount += 1;
    return this.presentCount;
  }

  decrement() {
    this.presentCount -= 1;
    return this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}

var createCounter = function (init) {
  return new Counter(init);
};
