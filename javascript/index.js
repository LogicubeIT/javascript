// console.log('hello')
// alert('hi from alert')

// types of variables

// three types of variables: 
// 1. var
// 2. let
// 3. const 
// declaration / initializing of variable

var a;
//1. it can be re-declared
var a;
//2. it can be re-assigned

let z = 1;

//1. it can not be re-declared
// 2. it can be re-assigned


// const variable can't be redeclared / changed
const c = 2;

// const variables can neither be re-assigned nor re-declared.

// assigning a value to a variable 

var a = 10;
 a = 100;
var b = "hello";

z = 200;

// hence, '=' sign is an assignment operator, ie., it assigns the values to the variable.

// Variables of type 'var' are expected to be re-declared or whose values are going to change in the future.

console.log("global scope",a)
console.log("global scope",z)
console.log("global scope",c)
// Scopes :
// scopes are of two types:
// 1. Global
// 2. local

// declaring variables in a scope:
{
    a = 100000;
    console.log("local scope",a)
    // local declaration
    z = 99999;
    console.log("local scope",z)
    const c = 1;
    // console.log("local scope",c)
}


console.log("modified variables:",a)
console.log("modified variables",z)
// the below scope is a local scope in itself. but any other scope inside it will / can have access to its parent scope.

