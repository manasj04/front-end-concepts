//closures - function along with it's lexical scope bundled together is called closure
// function x(){
//     var a = "Closure";
//     return function y(){
//         console.log(a);
//     }
// }

// var z = x();
// z();

//what will be the o/p?
//o/p will be "Redefined" because closure will contain reference of a not the value of a
// function x(){
//     var a = "Closure";
//     function y(){
//         console.log(a);
//     }
//     a = "Redefined";
//     return y;
// }

// var z = x();
// z();

//what will be the o/p?
//o/p will be Inside x Inside z
// function z(){
//     var b = "Inside z";
//     function x(){
//         var a = "Inside x";
//         function y(){
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }

// z();

//Interesting interview ques https://youtu.be/eBTBG4nda2A
// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Here");
// }

// x();

//solution to above are 1.use let 2.closure fn 
