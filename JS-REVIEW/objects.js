// ✅ Exercise 1 – Object Basics
const user = {
  name: "Emon",
  age: 33,
  country: "Bangladesh"
};

console.log(user.name);
console.log(user["country"]);

// const newUser = [...user, {profession: "AdOps Executive"}];
console.log({...user, profession: "AdOps Executive"});

console.log({...user, age: 34});

delete user.country;
console.log(user);

// ✅ Exercise 2 – Object Methods
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// ✅ Exercise 3 – Destructuring

const product = {
  id: 1,
  title: "Laptop",
  price: 50000
};

const {title, price} = product;
const {title:productName} = product;
const {brand = "HP"} = product;

// ✅ Exercise 4 – Spread Operator
const user1 = { name: "Emon", age: 33 };
const newUser1 = {...user1};
const updateUser1 = {...user1, age:35};
const user2 = {...user1, country:"Bangladesh"};

// ✅ Exercise 5 – Optional Chaining
const user3 = {
  name: "Emon",
  address: {
    city: "Khulna"
  }
};
console.log(user3?.address?.city);
console.log(user3?.address?.zip);

