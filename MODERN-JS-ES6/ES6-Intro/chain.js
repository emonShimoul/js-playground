
const data = {
    count: 5000,
    data: [
        {id:1, name: 'babul', job: 'leader'},
        {id:1, name: 'dabul', job: 'leader'},
    ]
}

const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '35/A Kachukhet Lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'Cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address.stret?.third;    // optional chaining

console.log(userFloor);