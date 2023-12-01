// types of variable

//var, let, const

// 1. VAR

// declaration ( declaring a variable )
var a;

// assignment ( assigning a value to a variable using assignment operator ( = ) )
a = 10;

// access value of a variable in the browser using console.log()
console.log(a)

// re-declaration of variable type 'VAR'

var a;

//yes, it is possible

//re-assigning value of a variable

 a = 30;
// console the value to check if the value of a is changed
console.log(a)

// yes, the value is changed, hence, re-assignment is also possible in 'VAR'

// scoping
// {} curly braces are known as scope
{
    // local declaration of a variable type 'VAR' inside a scope;
    var b = 'abc';
    // console the value of b 
    console.log(b)
    // change the value of b 
    b = 'xyz';
}

// console the value of b outside the scope to check whether the variable type 'VAR' allows it outside the scope.
console.log(b);

// yes, the variable type 'VAR' allows the variable value to change outside of the scope as well, after the re-assignment.




