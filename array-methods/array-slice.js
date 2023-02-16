// Array.prototype.slice()

var nums = [1, 2, 3, 4, 5];

// the slice() method will take two parameter. 1st one is the first index and 2nd one is the second index. It will cut the values which remains from 1st parameter index to before the 2nd parameter index.
var result = nums.slice(1, 3);
var result2 = nums.slice(-3, 4);

// NOTE: THIS slice() METHOD WILL NOT CHANGE THE MAIN ARRAY
console.log(result);
console.log(result2);
console.log(nums);