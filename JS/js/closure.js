function temporary() {
    let counter = 0;

    return function () {
        counter += 1;
        // console.log("hello");
    }
}

const add = temporary();    // add is a function at the end


add(); // 1
console.dir(add);
add(); // 2
console.dir(add);
add(); // 3
console.dir(add);