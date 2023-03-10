// find the longest string from an array and display its index number

function longestString(names) {
    let longestWord = '';

    for (nm of names) {
        if (nm.length > longestWord.length) {
            longestWord = nm;
        }
    }

    return [longestWord, names.indexOf(longestWord)]
}

console.log(longestString(['sumit saha', 'aman', 'learn with sumit', 'akash', 'saad', 'daiyan']));