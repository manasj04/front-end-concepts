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
function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            }, x*1000);
        }
        close(i);
    }
    console.log("Here");
}

x();

// function x(){
//     for(var i=1;i<=5;i++){
//         function close(){
//             var j = i;
//             setTimeout(function(){
//                 console.log(j);
//             }, j*1000);
//         }
//         close();
//     }
//     console.log("Here");
// }

// x();

//advandatges of closures
//1. Memoization
//2. Data hiding/encapsulation

//Data hiding/encapsulation
//in below code anyone can change the value of counter, its not hidden or protected
// var counter = 0;
// function increment(){
//     counter++;
// }

//solution using closure
// function counter() {
//   var count = 0;
//   return function increment() {
//     count++;
//   }
// }

//disadvantages of closures
//1. Overconsumption of memory - because closed values are not garbage collected, this can lead to memory leaks