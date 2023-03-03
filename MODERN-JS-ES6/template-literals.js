// template literals

const a = 5;
const b = 7;
console.log('Template literal:');
console.log(`First num is ${a} and second num is ${b}. Sum is ${a + b}.`);
console.log(`We can use
            multiline and also tab
            using template literals
            which can't be done using
            normal single or double quotes.
`);


// tagged template literals
console.log("-----------------------------------------");
console.log("-----------------------------------------");

console.log('Tagged template literal:');
function modifier(strings, ...values) {
    // console.log(strings);
    // console.log(values);
    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr. " + values.shift() : "");
    }, "");
    return m;
}

const player1 = "Sakib";
const player2 = "Tamim";

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);