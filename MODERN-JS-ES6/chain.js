const data = [{id: 1, name: 'Emon', address: 'Khulna'}];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenevo laptop', price: 30000},
        {id: 2, name: 'macbook', price: 80000}
    ]
}

console.log(products.data[1].price);


const user = {
    id: 5004,
    name: "Emon Shimoul",
    address: {
        street: {
            first: "54/1 uttar side",
            second: "KDA",
            third: "Alor goli"
        },
        city: "Khulna"
    }
}

const user2 = {
    id: 5003,
    name: "Fara Tuze",
    address: {
            first: "54/1 uttar side",
            second: "KDA",
            third: "Alor goli"
    }
}

console.log(user.address.street?.second);
console.log(user2.address.street?.second);