/*
8 ways to get undefined:
1. variable that is not initialized
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined
*/

// 1:
let first;
console.log(first);

// 2:
function second(a, b) {
  const total = a + b;
}
const result = second();
console.log(result);

// 3:
function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
third(2, 5);

// 4:
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
const total = noNegative(2, -5);
console.log(total);

// 5:
const fifth = { id: 2, name: "ponchom", age: 40 };
console.log(fifth.age, fifth.salary);

// 6:
const sixth = [3, 5, 87, 56, 47];
console.log(sixth[1], sixth[5], sixth[200]);

// 7:
const seventh = [3, 5, 87, 56, 47];
// you should not do it. instead use splice
delete seventh[1];
console.log(seventh[1]);

// 8:
// you also should not do it. instead use null to explicitly set nothing as value.
const eight = undefined;
