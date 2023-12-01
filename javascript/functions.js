// two types of functions
// 1. pre-defined 
// 2. user-defined

//2. User Defined functions

// 3 parts: function key word, name of the function, and scope of the function;
function sum() {
    const a = 1;
    const b = 2;

    const sum = a + b;
    console.log(sum)
}


// calling a function:
sum();

// user defined function with arguments/parameters
function add(arg1, arg2) {
    const sum = arg1 + arg2
    console.log('sum of 2 parameters',sum)
}

add(2, 100)

// add, substract, division, multiplication