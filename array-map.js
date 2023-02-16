// Array.prototype.map()

var nums = [1, 2, 3, 4, 5, 6];

const result = nums.map((num) => {
    return 2 * num;
});

// NOTE: THIS map() METHOD WILL NOT CHANGE THE MAIN ARRAY
console.log(nums);
console.log(result);