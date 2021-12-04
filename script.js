// == FUNCTIONS ==
// Greeter function

const greeter = (str) => `Hello, ${str}!`;

console.log(greeter("Harry"));
console.log("---------------------------------------");

// What type? function

const checkType = (arg) => typeof arg;

console.log(
  checkType([1, 2, 4, "Joe"]),
  checkType("Joe"),
  checkType(1),
  checkType(undefined),
  checkType(NaN)
);
console.log("---------------------------------------");

// Check length function

const checkLength = (string) => string.length;

console.log(checkLength("How long is this string?"));
console.log("---------------------------------------");
