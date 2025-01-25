x = 5;

console.log(x);

// var x;   // output: 5 (because of hoisting)
let x; // ReferenceError: Cannot access 'x' before initialization

let y; // declare
y = 7; // initialize

/**
 *
 * let, const, var all are hoisted.
 *
 * JavaScript only hoists declarations, not initializations.
 *
 * Variables defined with let and const are hoisted to the top of the block, but not initialized. Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared. The variable is in a "temporal dead zone" from the start of the block until it is declared.
 *
 * But var is initialized with 'undefined' by default.
 *
 * Using a let variable before it is declared will result in a ReferenceError.
 *
 * But using a const variable before it is declared, is a syntax error, so the code will simply not run. For const value of the variable must be assigned when it is declared otherwise it will throw a sytaxerror.
 *
 */
