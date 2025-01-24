const numbers = [4, 5, 6, 7, 8, 3, 2, 10];

const double = numbers.map((num) => num * 2);
const max = numbers.filter((num) => num > 6);
const min = numbers.find((num) => num <= 6);

numbers.forEach((num) => {
  //   console.log(num * 3);
});

// console.log(double);
console.log(max);
console.log(min);
