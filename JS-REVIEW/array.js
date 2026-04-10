const numbers = [1,2,3,4,5];

numbers.push(6);
numbers.shift();
numbers.splice(1,1,30);
// console.log(numbers);

const doubleArray = (arr) => {
    return arr.map(num => num*2);
}

console.log(doubleArray([1,2,3,40,50]));
