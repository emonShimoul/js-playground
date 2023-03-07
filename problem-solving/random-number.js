function getaRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getaRandomInteger(1, 6));