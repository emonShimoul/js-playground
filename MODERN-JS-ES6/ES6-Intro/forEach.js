const products = [
    {id: 1, name: "laptop", price: 80000},
    {id: 2, name: "phone", price: 30000},
    {id: 3, name: "watch", price: 15000},
    {id: 4, name: "headphone", price: 2000},
]

const items = products.forEach(product => console.log(product.name));
const prices = products.forEach(product => console.log(product.price));