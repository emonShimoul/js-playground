const numbers = [2, 8, 4, 6, 3];

const makeDouble = numbers.map(number => number*2);
console.log(makeDouble);


const friends = ['Tom Hanks', 'Tom Criuse', 'Tom Brady', 'Tom Solaiman'];

const friendsLetters = friends.map(friend => friend[0]);
const friendsLength = friends.map(friend => friend.length);
console.log(friendsLetters);
console.log(friendsLength);


const products = [
    {id: 1, name: "laptop", price: 80000},
    {id: 2, name: "phone", price: 30000},
    {id: 3, name: "watch", price: 15000},
    {id: 4, name: "headphone", price: 2000},
]

const items = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(items);
console.log(prices);
