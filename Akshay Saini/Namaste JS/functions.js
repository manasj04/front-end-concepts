//function statement aka function declaration
function a(){
    console.log("a");
}

//function expression
var b = function(){
    console.log("b");
}
//difference bw a and b? -> hoisting

//anonymous function -> below statement is illegal(results in syntax error)
// function(){

// }
//anonymous functions are used in function expression

//named function expression
var c = function xyz(){
    console.log("c");
}
//tricky question
//xyz() -> this will result in referance error, xyz wont be defined in global scope, but will be created in local scope
//hence below code is valid
var c = function xyz(){
    console.log(xyz);
}

//first class functions
//functions can be passed as a parameter to another function, and we can return a function from a function
//this ability to use fn as a value in JS is called as first class function
