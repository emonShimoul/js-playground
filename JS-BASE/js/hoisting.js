print5();
print10();

// var keyword will be hoisted. let and const doesn't
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
