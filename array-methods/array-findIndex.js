// Array.prototype.findIndex()

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = nums.findIndex((currentValue, index, arr) => {
    // findIndex is exactly works as the find() method but instead of the first true element it will return its index. When the condition is not true for any of the element of the array it will return -1 
    // It also returns the current index and also the array in the 2nd and 3rd parameter respectively. 
    return currentValue >= 7;
});

// NOTE: THIS findIndex() METHOD WILL NOT CHANGE THE MAIN ARRAY
console.log(result);
console.log(nums);

