// Array.prototype.reduce()

var nums = [1, 2, 3, 4, 5, 6];
var sum = nums.reduce((prevValue, currentValue, currentIndex, arr) => {
    return prevValue + currentValue;
}, 0);

console.log(sum);
// NOTE: THIS reduce() METHOD WILL NOT CHANGE THE MAIN ARRAY