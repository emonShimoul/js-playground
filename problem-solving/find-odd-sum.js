
function findOddSum(array) {
    // return array;
    let sumOdd = 0;
    for (arr of array) {
        if (arr % 2 !== 0) {
            sumOdd += arr;
        }
    }
    return sumOdd;
}

const result = findOddSum([12, 45, 65, 78, 32, 45, 91]);
console.log(result);