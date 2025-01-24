const numbers = [4, 5, 7, 1, 3];

const total = numbers.reduce((prev, curr) => prev + curr, 0);
const total2 = numbers.reduce((prev, curr) => prev + curr, -20);

console.log(total);
console.log(total2);
