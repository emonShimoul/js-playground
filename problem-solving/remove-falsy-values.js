// find falsy values from an array and remove them

const mixedArr = [
    "lws",
    undefined,
    "learn with sumit",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "Thanks all",
    NaN
];

// const trueArray = mixedArr.filter(function (el) {
//     if (el) {
//         return true;
//     } else {
//         return false;
//     }
// });

// using Boolean function of javascript
const truthyArray = mixedArr.filter(Boolean);

console.log(truthyArray);


// find falsy values from an object and remove them

const mixedObj = {
    a: "lws",
    b: undefined,
    c: "learn with sumit",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN
};

const truthyObj = function (obj) {
    for (let i in obj) {
        if (!obj[i]) {
            delete obj[i];
        }
    }
    return obj;
}

console.log(truthyObj(mixedObj));