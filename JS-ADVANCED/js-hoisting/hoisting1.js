x = 5;

console.log(x);

// var x;   // output: 5 (because of hoisting)
let x; // ReferenceError: Cannot access 'x' before initialization

/**
 * let, const, var all are hoisted.
 * Variables defined with let and const are hoisted to the top of the block, but not initialized. Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared. The variable is in a "temporal dead zone" from the start of the block until it is declared.
 * But var is initialized with 'undefined' by default.
 *
 */
