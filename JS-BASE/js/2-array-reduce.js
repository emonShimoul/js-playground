const numbers = [45, 4, 9, 16, 25];

function myFunction(total, value, index, array) {
    console.log(total);
    console.log("-------------------");
    return total + value;
}

// reduce method
const newNumbers = numbers.reduce(myFunction, 1);

console.log(newNumbers);