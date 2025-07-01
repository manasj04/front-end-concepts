//this in global space
// -> global object (in browser it is window object)
// -> undefined (in strict mode)


//this inside a function
//depends on how the function is called

// function x(){
//     console.log(this);
// };
// x();
// -> global object (in browser it is window object)
// -> undefined (in strict mode) : x() -> this will be undefined, window.x() -> this will be window


//this inside a object's method

// const obj = {
//     name : "Manas",
//     //here x is a method of obj, not a function
//     //difference between function and method is that method is a function inside an object
//     x : function(){
//         console.log(this);
//     }
// }
// obj.x(); //-> this will be obj

// // call, apply, bind (sharing methods between objects)
// const obj2 = {
//     name : "Jain",
// }
// obj.x.call(obj2); //-> this will be obj2

//this inside arrow function
//arrow function does not have its own this, it takes this from its lexical environment

//this inside DOM -> refers to the element that triggered the event



