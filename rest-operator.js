// rest operator

// rest operator is defined as same as spread operator. but it is different depending on the use case.
// if it used as the parameter of a function then it is called rest operator.

function myFunc() {
    // arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
    console.log("Using argument object:");
    console.log(arguments);
}

function myFunc1(...params) {
    console.log("Using rest operator:");
    console.log(params);
}

function myFunc2(a, ...params) {
    console.log("Using rest operator:");
    console.log(a);
    console.log(params);
}

myFunc(5, 6, 7, 8, 9);
console.log("-----------------------------------------");
console.log("-----------------------------------------");
myFunc1(5, 6, 7, 8, 9);
console.log("-----------------------------------------");
console.log("-----------------------------------------");
myFunc2(5, 6, 7, 8, 9);