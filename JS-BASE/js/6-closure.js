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

/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
A closure is the combination of a function and the lexical environment within which that function was declared.

Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.
*/