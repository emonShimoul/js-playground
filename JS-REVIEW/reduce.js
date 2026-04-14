// Exercise 1 – Sum of Numbers (Warm-up)
const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((acc, curr) => acc + curr, 0));

// Exercise 2 – Count Occurrences
const arr2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
/* Expected Output:
{
  apple: 3,
  banana: 2,
  orange: 1
}
*/
const arr2Count = arr2.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
},{});

/* Alternative (more readable)
const arr2Count = arr2.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {});
*/
console.log(arr2Count);

// Exercise 3 – Group by Property (Real-world 🔥)
/*
Input:
const users = [
  { name: "Emon", role: "admin" },
  { name: "Sara", role: "user" },
  { name: "John", role: "admin" }
]

Output:
{
  admin: [
    { name: "Emon", role: "admin" },
    { name: "John", role: "admin" }
  ],
  user: [
    { name: "Sara", role: "user" }
  ]
}
*/

const users = [
  { name: "Emon", role: "admin" },
  { name: "Sara", role: "user" },
  { name: "John", role: "admin" }
]

const result = users.reduce((acc, user) => {
    acc[user.role] = acc[user.role] || [];
    acc[user.role].push(user);
    return acc;
}, {});
console.log(result);
