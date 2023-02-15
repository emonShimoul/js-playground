// ARRAY FIND METHOD (array.prototype.find()) 
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = num.find(function (currentValue, currentIndex, arr) {
    // return the 1st element which is greater than 5. When it will find the first true, it will immediately break the loop and get out from the function.  
    return currentValue > 5;
});
console.log(result);


// ARRAY FIND METHOD WITH THIS KEYWORD
class Student {
    constructor(name, age) {
        this.name = name;
        this.age - age;
    }
    test() {
        console.log("hello");
    }

    // In the second parameter, the this keyword is needed to find the value of this.test() method. otherwise the this keyword is unable to find the test() method from the class.
    exampleFunction() {
        let array = [1, 2, 3];
        array.find(function () {
            this.test();
        }, this);

        // the error can be solved also by using the arrow function. The second parameter (this) is not needed if we use the arrow function.

        // array.find(() => {
        //     this.test();
        // });
    }
}

let student = new Student("Shimul", 30);

student.exampleFunction();