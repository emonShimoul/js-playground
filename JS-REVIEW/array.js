
// Exercise 1 – Basic Array Operations
const numbers = [1,2,3,4,5];
numbers.push(6);
numbers.shift();
numbers.splice(1,1,30);
// console.log(numbers);

// Exercise 2 – Array + Function
const doubleArray = (arr) => {
    return arr.map(num => num*2);
}

const filterEven = (arr) => {
    return arr.filter(num => num%2===0);
}

// Exercise 3 – Reduce & Sum
const sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1,2,3,4]));

// Exercise 4 – Map + Callback
const greetNames1 = names => {
    callback(names.map(nm => "Hello, " + nm));
}
const greetNames = (names, callback) => {
    const result = names.map(nm => `Hello, ${nm}`);
    if(callback) callback(result);
    return result;
}
greetNames(["Emon", "Papri"], (result) => {
    console.log(result);
    
}); // ["Hello, Emon", "Hello, Sara"]

// const even = filterEven([1,2,3,4,7,9,8,12]);
// console.log(even);


// console.log(doubleArray([1,2,3,40,50]));
