const cart = ["shoes", "pants", "shirts"];

//assume createOrder,proceedToPayment are async operations(like calling some backend APIs)
//we want to execute proceedToPayment after createOrder is exected and we have an orderId

//callback approach
// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// })

//promise approach
// const order = createOrder(cart);
// console.log("Executed synchronously");

//when line 12 is executed, it will return a promise and we can think promise as an object e.g. {data : undefined}
//which is stored immediately in order and line 13 will be executed immediately in a sync fashion. 

// order.then(function(orderId){
//     proceedToPayment(orderId);
// });

//Now when createOrder is completed order will have something like {data : orderId}, and then method attached to order is automatically called

//solution to inversion to control
//We have controlled of our callback execution now, because in callback approach we were passing fn as a callback,
//but in promises we are attaching it to a promise object

const GITHUB_API = "https://api.github.com/users/akshaymarch7";
const user = fetch(GITHUB_API);
//console.log(user);

//fetch returns a promise and user will be a promise object(like order described above), 
//will have 2 values PromiseState(state of promise), PromiseResult(data returned by API like orderId above)

// user.then(function(data){
//     console.log(data);
// })

//states -> pending, fulfilled, rejected
//a promise can be resolved ony once i.e. either fulfilled or rejected
//data returned in immutable, nobody can modify wherever passed

user.then(function(data){
    return data.json()
}).then(function(data){
    console.log(data);
});

//promise chaining, solution to callback hell


//-----------------------------------------------------------------------------------------------
//above what we wrote for create order is consumer part of promise, now will look at producer part

//producer
function createOrder(cart){
    const promise = new Promise(function(resolved, reject){
        //our async opertaion whatever we want to do will come here. ex below

        if(!valid(cart)){
            reject(new Error("Cart is not valid"));
        }

        //logic for getting orderId from backend
        const id = '1234';
        if(id){
            resolved(id);
        }
    });
    return promise;
}

function valid(data){
    return false;
}

//consumer
const order = createOrder(cart);

order.then(function(id){
    console.log(id);
}).catch(function(err){
    console.log(err);
    console.log(err.message);
})