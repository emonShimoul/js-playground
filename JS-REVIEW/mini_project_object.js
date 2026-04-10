// User Management System

const users = [
  { id: 1, name: "Emon", age: 33, active: true },
  { id: 2, name: "Sara", age: 28, active: false },
  { id: 3, name: "John", age: 35, active: true },
  { id: 4, name: "John2", age: 39, active: false }
];

// 1. Get All User Names
console.log(users.map(user => user.name));

// 2. Get Active Users
console.log(users.filter(user => user.active));

// 3. Add New User (Important)
const addUser = (users, newUser) => {
    return [...users, newUser];
}
console.log(addUser(users, { id: 4, name: "Papri", age: 32, active: true }));

// 4. Update User Status
const updateUserStatus = (users, userId) => {
    return users.map(user => 
        user.id === userId ?
        {...user, active: !user.active} :
        user
    );
};
console.log(updateUserStatus(users, 1));

// 5. Get Average Age
console.log(users.reduce((acc, curr) => acc + curr.age, 0) / users.length);

// 6. Advanced (Very Important) : Return formatted users
console.log(users.map(user => (
    {
        id: user.id,
        info: `${user.name} (${user.age})`
    }
)));

// 7. Bonus (Real World Thinking)

const processUsers = (users, callback) => {
    const result = callback(users);
    return result;
}

console.log(processUsers(users, users => users.map(user => user.name)));
console.log(processUsers(users, users => users.map(user => user.age)));