// weakSet

// the difference of set and weakSet is that the set can recieve any data type but weakset can only receive objects.
// weakSet is not an iterable object like set. that means loop can not be implemented in weakSet.
// all other method in set can also be accessed by weakset

const ws = new WeakSet([{ a: 1 }, { b: 2 }]);
// ws.add({ a: 1 })
console.log(ws);