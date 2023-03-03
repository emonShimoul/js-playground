// important object methods
const myObj = {
    name: 'Javascript',
    estd: "1995",
    founder: "Brendan Eich",
    ranking: 1,
};

var keys = Object.keys(myObj);
var values = Object.values(myObj);
var entries = Object.entries(myObj);

console.log("Only keys:");
console.log(keys);
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log("Only values:");
console.log(values);
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log("Both keys and values:");
console.log(entries);