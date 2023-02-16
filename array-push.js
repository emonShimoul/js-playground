// Array.prototype.push()

var nums = [1, 2, 3, 4];
// nums.push(6, 7, 8, 9);
const result = nums.push(0, 9, 8, 12, 133);
// nums.push([6, 7, 8]);

// NOTE: THIS push() METHOD WILL CHANGE THE MAIN ARRAY
console.log(nums);
console.log(result);