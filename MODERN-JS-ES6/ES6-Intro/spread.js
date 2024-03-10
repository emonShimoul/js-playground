const max = Math.max(12, 85, 999, 78);

const numbers = [12, 85, 999, 78];
// console.log(...numbers);   // spread operator

const largest = Math.max(...numbers);
// console.log(largest);

/*******
const numbers2 = numbers;
numbers.push(55);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);
*******/

const numbers2 = [...numbers];
const numbers3 = [444, 8, ...numbers, 45, 24];
numbers.push(55);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);
console.log(numbers3);
