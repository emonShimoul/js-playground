// sets

// set will always return unique data. set is an iterable object

console.log('Example of set:');
let mySet = new Set();

mySet.add(5);
mySet.add(7);
mySet.delete(5);
mySet.add(6).add(7).add(8).add(9).add('Bangladesh').delete(6);
// mySet.clear();

console.log(mySet);
console.log(mySet.size);

// convert array into set
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log('Convert array into set:');
let myArray = [1, 2, 3, 4, 5, 6, 7];
let myNewSet = new Set(myArray);      // not only array but also any kind of iterable item can be passed as a parameter of the set

console.log(myArray);
console.log(mySet);

// iterate through a set
console.log("-----------------------------------------");
console.log("-----------------------------------------");
let anotherSet = new Set('Bangladesh');
console.log(anotherSet);
for (let value of anotherSet) {
    console.log(value);
}

// convert set into array
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log('Convert set into array:');
console.log([...mySet]);

// return the common elements from an array using set
const arrayItems = [1, 2, 3, 4, 5, 5, 6, 6, 7, 2, 8, 8, 8, 4, 9, 2];
console.log([...new Set(arrayItems)]);

// operation in multiple setsconsole.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log('Union operation on set:');
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);
console.log(union);

console.log('Intersection operation on set:');
let intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection);

console.log('Difference on set');
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);
