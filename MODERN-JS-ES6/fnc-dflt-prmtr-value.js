// function default parameter value

// the default parameter will be executed when there no parameter is given by the function call. 
// if undefined is send as parameter then the default parameter will be returned. because undefined means that there is no value.
// if null is send as parameter then the null is returned.
function myFunc(x = 7) {
    return x;
}

console.log(myFunc(undefined));
console.log(myFunc(null));