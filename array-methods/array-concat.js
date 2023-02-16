// Array.prototype.concat()

var nums1 = [1, 2, 3, 4, 5];
var nums2 = [6, 7, 8, 9, 10];
var nums3 = [60, 70, 80, 90, 100];
var nums4 = [66, 77, 88, 99, 111];
// The concat() method will join the multiple arrays. 
var results = nums1.concat(nums2, nums3, nums4);

// NOTE: THIS concat() METHOD WILL NOT CHANGE THE MAIN ARRAY
console.log(results);
console.log(nums1);
console.log(nums2);