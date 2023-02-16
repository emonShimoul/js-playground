// destructuring

// OBJECT DESTRUCTURING
const user = {
    id: 53,
    name: "Emon",
    age: 30,
    education: {
        degree: "BSC"
    }
}

console.log("Object destructuring:");

const { id, name, age } = user;
console.log(id, name, age);

console.log("Nested object destructuring:");
const { education: { degree } } = user;
// const { education: { degree } = {} } = user;   // set a default parameter of the degree property
// const { education: { degree: x } } = user;
// const { degree } = user.education;
console.log(degree);
// console.log(x);

console.log("-----------------------------------------");
console.log("-----------------------------------------");
// ARRAY DESTRUCTURING
const nums = [1, 2, 3, 4, 5, 6];
const [a, b] = nums;
const [, c, , , , d] = nums;
console.log("Array destructuring:");
console.log(a, b);
console.log(c, d);


const nums1 = [1, 2, [3, 100, 500], 4, 5, 6];
const [, , [, m, n]] = nums1;
console.log("Nested array destructuring:");
console.log(m, n);

console.log("-----------------------------------------");
console.log("-----------------------------------------");
// SWAPPING VALUES USING DESTRUCTURING

// the old way
console.log("Swapping values using old way:");
let num1 = 10;
let num2 = 20;
console.log(num1, num2);
let temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);

// new way (using destructuring)
console.log("Swapping values using new way (destructuring):");
let num3 = 70;
let num4 = 80;
console.log(num3, num4);
[num4, num3] = [num3, num4];
console.log(num3, num4);