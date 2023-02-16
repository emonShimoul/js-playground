// spread operator

var nums = [1, 2, 3];
console.log("Use of spread operator:");
var newNums = [...nums, 4, 5, 6];

console.log(newNums);

// a very important use of spread operator is to exactly copy an array from an existing array in immutable way. 
// immutable means after copying if the existing array is changed for any reason then it won't change the new copied array.
var anotherNums = [...nums];
nums.push(99);
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log("Copying an existing array in another array in immutable way:");
console.log(nums);
console.log(anotherNums);

// concatenation also can be done by spread operator
var nums1 = [10, 20, 30];
var nums2 = [40, 50, 60];

var concat = [...nums1, ...nums2];
console.log("-----------------------------------------");
console.log("-----------------------------------------");
console.log("Concatenation: ");
console.log(concat);

// spread operator is also worked as same way for an object
