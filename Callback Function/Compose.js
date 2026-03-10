// Leetcode - Problem List - Problem 2629

function compose(functions) {
  return function (x) {
    var result = x;
    for (var i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}

var functions = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
var result = functions(4);
console.log(result);

// console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x], (x = 4)));
// console.log(compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x], (x = 1)));
// console.log(compose([], (x = 42)));

// Time Complexity - O(n)
// Space Complexity - O(1)

// Array Reduce Method
const compose = (functions) => {
  return functions.reduce(
    (acc, fn) => {
      return (x) => acc(fn(x));
    },
    (x) => x,
  );
};

// Function Bind Method
const compose = (functions) => {
  const composed = functions.reduceRight(
    (acc, fn) => {
      return acc.bind(null, fn);
    },
    (x) => x,
  );
  return composed;
};

// Function Call Method
const compose = (functions) => {
  const composed = (x) => {
    return functions.reduceRight((acc, fn) => {
      return fn.call(null, acc);
    }, x);
  };
  return composed;
};

// Function Apply Method
const compose = (functions) => {
  const composed = functions.reduceRight(
    (prevFn, nextFn) => {
      return function (x) {
        return prevFn.apply(null, [nextFn(x)]);
      };
    },
    function (x) {
      return x;
    },
  );

  return composed;
};

// Recursion Method
const compose = (functions) => {
  if (functions.length === 0) {
    return (x) => x;
  } else if (functions.length === 1) {
    return functions[0];
  } else {
    const [fn, ...rest] = functions;
    return (x) => fn(compose(rest)(x));
  }
};
