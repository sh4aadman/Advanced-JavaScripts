// A function that is passed as an argument to another function, to be executed (or "called back") at a later point in time.
// Foundational concept for handling asynchronous operations and events.

// The callback function
function logQuote(quote) {
  console.log("The quote is: " + quote);
}

// The higher-order function that accepts a callback
function createQuote(quote, callback) {
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // Invokes the callback
}

// Call the function, passing `logQuote` as the callback argument
createQuote("eat your vegetables!", logQuote);

// Output:
// The quote is: Like I always say, eat your vegetables!
