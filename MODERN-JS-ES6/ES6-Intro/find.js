const numbers = [20, 8, 25, 4, 3, 10, 9, 55, 61, 18, 1];

const fives = numbers.find(num => num % 5 === 0);

console.log(fives);


const products = [
    {id: 1, name: "laptop", price: 80000},
    {id: 2, name: "phone", price: 30000},
    {id: 3, name: "watch", price: 15000},
    {id: 4, name: "headphone", price: 2000},
]

const cheap = products.find(product => product.price < 40000);
console.log(cheap);