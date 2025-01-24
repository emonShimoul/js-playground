for (let i = 0; i < 3; i++) {
  const myFunc = () => {
    console.log(i); // i is in the function scope (output: 1, 2, 3)
  };
  console.log(i, " using let!!");
  console.dir(myFunc);
  setTimeout(myFunc, 3000);
}

console.log("after for loop using let!!");

for (var i = 0; i < 3; i++) {
  const myFunc = () => {
    console.log(i); // i is in the global scope (output: 3, 3, 3)
  };
  console.log(i, " using var!!");
  console.dir(myFunc);
  setTimeout(myFunc, 3000);
}

console.log("after for loop using var!!");
