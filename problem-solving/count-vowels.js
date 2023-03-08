const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function (value, index, array) {
        if (vowels.includes(value)) {
            count++;
        }
    });
    return count;
};

console.log(countVowels("I love to code!!"));

