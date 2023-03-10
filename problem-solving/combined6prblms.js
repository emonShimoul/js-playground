// Problem 1: take a positive number as input. multiply the input with 3 then add with 10 after that divide it with 2 and finally subtract with 5 and return the calculated value. 
function mindGame(positiveNumber) {
    if (typeof (positiveNumber) === "number" && positiveNumber > -1) {
        return ((((positiveNumber * 3) + 10) / 2) - 5);
    }
    else {
        return "Please provide a positive number!!";
    }
}

// Problem 2: take a string as input calculate its length. if the length is even then will return Even otherwise return Odd
function evenOdd(str) {
    if (typeof (str) === "string") {
        return (str.length % 2 === 0 ? 'Even' : 'Odd');
    }
    else {
        return "Please provide a string!!";
    }
}

// Problem 3: take a number as input. find the difference of input value and 7. if the difference is less than 7 then will return the difference otherwise will return the double of the input.
function isLGSeven(num) {
    if (typeof (num) === "number") {
        return ((num - 7) < 7 ? (num - 7) : (num * 2));
    }
    else {
        return "Please provide a number!!";
    }
}

// Problem 4: take an number array as input. the numbers can be positive or negative value. if the number is positive then it will be called "good data" and negative number will be called "bad data". it will find and return the number of "bad data".
function findingBadData(arr) {
    const goodData = [];
    const badData = [];
    if (Array.isArray(arr) === true) {
        arr.map(ar => {
            ar >= 0 ? goodData.push(ar) : badData.push(ar);
        });
        return badData.length;
    }
    else {
        return "Please provide an array!!";
    }
}

// Problem 5: take 3 numbers as input. multiply these numbers with the specific value which are given. then add the multiplied values. if the added result is more than double of 1000 then subtract 2000 from the added result and return the subtracted value otherwise return the added result. 
function gemsToDiamond(gemsOfF1, gemsOfF2, gemsOfF3) {
    if ((gemsOfF1 != undefined && typeof (gemsOfF1) === 'number') && (gemsOfF2 != undefined && typeof (gemsOfF2) === 'number') && (gemsOfF3 != undefined && typeof (gemsOfF3) === 'number')) {
        const totalDiamonds = (gemsOfF1 * 21) + (gemsOfF2 * 32) + (gemsOfF3 * 43);
        return totalDiamonds > 2000 ? (totalDiamonds - 2000) : totalDiamonds;
    }
    else {
        return "Please provide all valid input!!";
    }
}
