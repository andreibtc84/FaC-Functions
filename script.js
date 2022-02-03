// == FUNCTIONS ==

// Greeter function
/* Write a function which greets the user. 
The function should receive one argument, a string. We can assume the string is a person’s name.
We’d like the function to return "Hello " and then the name. 
We should be able to see the output in the console. 
*/

const greeter = (str) => `Hello, ${str}!`;

console.log(greeter("Harry"));
console.log("---------------------------------------");

// What type? function
// Write a function which returns the type of the argument we pass in.

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
// Write a function which returns the length of the string we pass in.

const checkLength = (string) => string.length;

console.log(checkLength("How long is this string?"));
console.log("---------------------------------------");
