/*
function A() {
  x = 5;
  console.log(x);
  let x;
}

A(); // output: Uncaught ReferenceError: Cannot access 'x' before initialization
*/

/*
carName = "Volvo";
const carName;   // Uncaught SyntaxError: Missing initializer in const declaration
*/

var a = 7;

console.log(a, b); // output: 7 undefined (because JavaScript only hoists declarations, not initializations.)

var b = 5;
