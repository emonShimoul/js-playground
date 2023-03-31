print5();
print10();

// var keyword will be hoisted.
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log("outside ", i);

// this function will be hoisted
function print7() {
  console.log("inside function print5 ", 7);
}

// this function won't be hoisted. It will hoists only the function expression(const print10) not the function body.
const print10 = function () {
  console.log("inside function print5 ", 7);
};

// Hoisting is a JavaScript's default behavior of moving all declarations to the top of the current scope.

// All variable declarations (var, let, and const) are hoisted in JS, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.

// Only function declarations are hoisted in JS, function expressions are not hoisted. JS only hoist declarations, not initialization (assignments).
