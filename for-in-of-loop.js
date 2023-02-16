// for loop, for in, for of

// for loop
console.log("simple foor loop:");
for (let i = 6; i <= 10; i++) {
    console.log(i);
}
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log("Another look of simple for loop-");
let i = 1;
for (; ; i++) {
    if (i <= 5) {
        console.log(i);
    } else {
        break;
    }
}


// for in
// for in loop specially used for looping through an object. if it is used in an array/string then it will return the indexes of the array.
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log("for in loop:");
const myObj = {
    name: 'Javascript',
    estd: "1995",
    founder: "Brendan Eich",
};

for (property in myObj) {
    console.log(property);
}

// for of
// for in loop specially used for looping through an array. it is also worked for a string but won't work with object. it will generate an error with object.
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log("for of loop:");
const myArray = [1, 2, 3, 4, 5];
for (element in myArray) {
    console.log(element);
}