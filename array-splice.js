// Array.prototype.splice()
// Array.splice(start: number, deleteCount?: number | undefined)

var nums = [1, 2, 3, 4, 5];
// The splice() method takes 3 parameters. The 1st parameter will take the starting index from where the deleted operation will be started. 
// The 2nd parameter take the number of how many element will be removed or deleted.
// All the numbers from 3rd parameter are added to the array. 
// Both the remove and add new elements operation will be occured into the main array and the return array will be the elements which are deleted from the main array.
// var result = nums.splice(3, 2, 10, 12, 13, 19);
var result = nums.splice(-3, 2, 10, 12, 13, 19);

// NOTE: THIS splice() METHOD WILL CHANGE THE MAIN ARRAY
console.log(nums);
console.log(result);