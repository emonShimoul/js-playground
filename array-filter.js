// Array.prototype.filter()

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = nums.filter(function (currentValue, currentIndex, arr) {
    // return all the elements which are greater than 5. It actually returns an array of the elements which are fulfill the condition. 
    // It also returns the current index and also the array in the 2nd and 3rd parameter respectively.
    return currentValue > 5;
});

// NOTE: THIS filter() METHOD WILL NOT CHANGE THE MAIN ARRAY
console.log(result);
console.log(nums);