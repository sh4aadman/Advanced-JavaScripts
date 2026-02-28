// throw - to explicitly create and raise a user-defined exception (an error) during program execution.

function checkAge(age) {
  if (age < 18) {
    // Throws a custom error if the condition is met
    throw new Error("Age must be 18 or above.");
  }
  return "Age is valid.";
}

try {
  console.log(checkAge(16));
} catch (error) {
  // Catches the thrown error and handles it
  console.error("An error occurred:", error.message);
}
// Output: An error occurred: Age must be 18 or above.
// The program continues running after handling the error.
