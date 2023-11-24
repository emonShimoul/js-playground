// object destructuring
const fish = {
    name: "King Hilsha",
    address: 'Chandpur',
    color: 'Silver',
    phone: '01681171757',
    price: 4000
}

const {phone, color, price} = fish;
console.log(phone, color, price); 


// array destructuring
const [, , a, b, c] = [44, 99, 17, 23, 8];
console.log(a, b, c);