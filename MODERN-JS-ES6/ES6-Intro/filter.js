const numbers = [2, 8, 24, 4, 3, 11, 9, 55, 61, 18, 1];


const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 10);
const even = numbers.filter(number => number % 2 === 0);

console.log(bigNums);
console.log(tiny);
console.log(even);


const products = [
    {id: 1, name: "laptop", price: 80000},
    {id: 2, name: "phone", price: 30000},
    {id: 3, name: "watch", price: 15000},
    {id: 4, name: "headphone", price: 2000},
]

const expensive = products.filter(product => product.price > 20000);
console.log(expensive);