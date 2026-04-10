// Exercise 1 starts

// multiply func
function multiply(num1, num2){
    return num1 * num2;
}
const calc = multiply(2, 8);

// isEven func
function isEven(num){
    if(num === 0){
        return 0;
    } else if(num%2==0){
        return "Even";
    } else {
        return "Odd";
    }
}
const output = isEven(7778);

// Exercise 2 starts

const divide = function (num1, num2) {
    return num1/num2;
}

// Exercise 3 starts

// multiply arrow func
const multiplyArr = (num1, num2) => {
    return num1 * num2;
}

// isEven arrow func
const isEvenArr = (num) => {
    if(num === 0){
        return 0;
    } else if(num%2==0){
        return "Even";
    } else {
        return "Odd";
    }
}

// Exercise 4 starts

const divideArr = (num1, num2=1) => {
    return num1/num2;
}

// Exercise 5 starts
const calculate = (a,b=0,operation="add") => {
    if(operation.toLowerCase() === "add"){
        return a + b;
    } else if (operation.toLowerCase() === "subtract"){
        return a - b;
    } else if (operation.toLowerCase() === "multiply"){
        return a * b;
    } else if (operation.toLowerCase() === "divide"){
        return a / b;
    } else{
        return "Please apply add / subtract / multiply / divide";
    }
}

//  Exercise 5 with switch case
const calculate1 = (a, b=0, operation="add") => {
  const op = operation.toLowerCase();
  switch(op){
    case "add": return a + b;
    case "subtract": return a - b;
    case "multiply": return a * b;
    case "divide": return a / b;
    default: return "Use add / subtract / multiply / divide";
  }
}

// console.log(calc);

// console.log(output);

// console.log(divide(130,5));

// console.log(multiply(7,5));

// console.log(isEven(0));
// console.log(isEven(50));
// console.log(isEven(503));

// console.log(divideArr(8));

console.log(calculate(10, 5, "add"));
console.log(calculate(10, 5, "subtract"));
console.log(calculate(10, 5, "multiply"));
console.log(calculate(10, 5, "divide"));
console.log(calculate(10));

