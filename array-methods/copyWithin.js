// copyWithin

// copyWithin(target, start, end)
// this copyWithin function copy all the element in between the start and end position then replace it with the element of the targeted position.
// target is required
// start is optional. default value of start is 0
// end is also optional and it's default value is length of the array (array.length)
// never changes the length of the array (array.length)
// overwrites original array
// returns modified array

let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];

// a.copyWithin(3, 2);
// a.copyWithin(6, 1, 2);     // it will not copy the value because the copied element will increase the length of the array

// a.copyWithin(3);
// a.copyWithin(-3, -1,-2); // it also not works because the copy works from left to write elements

a.copyWithin(-3, -2, -1);

// NOTE: THIS copyWithin() METHOD WILL NOT CHANGE THE MAIN ARRAY
console.log(a);