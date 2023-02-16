// pass by value / reference

// everything is passed by reference in JS

let a = {
    num: 1,
}

let b = {
    num: 99,
}

let change = (val1, val2) => {
    val1 = {};             // assignment operation, for this a new slot is created in the memory and as a result no effect occured in the a object.
    val2.num = 100;        // mutation operation, for this the remainin slot's value has been changed and as a result the value of b object also has been changed.
};

change(a, b);    // passed by reference

console.log(a);
console.log(b);