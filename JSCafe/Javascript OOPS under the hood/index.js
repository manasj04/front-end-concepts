//in JS functions are actually objects i.e. they can have prpoerties as well

//Lecture 1
const myObject = {
    name : "Manas"
};

console.log(myObject.name);
console.log(myObject.hasOwnProperty("name"));


function myFunction(){
    console.log("myFunction");
}

myFunction.color = "red";
console.log(myFunction());
console.log(myFunction.color);
console.log(myFunction.toString());
console.log(myFunction.hasOwnProperty("color"));

