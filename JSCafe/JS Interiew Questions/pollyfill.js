//map
Array.prototype.map = function(callback){
    const output = [];
    this.forEach((element, index) => {
        output.push(callback(element, index, this));
    });
    return output;
};

const multiplyby2 = (e) => e*2;
console.log([1,2,3].map(multiplyby2));

//filter
Array.prototype.filter = function(callback){
    const output = [];
    this.forEach((element, index) => {
        if(callback(element, index, this)){
            output.push(element);
        }
    });
    return output;
}

const checkForEvenNo = (e) => e%2 === 0;
console.log([1,2,3,4].filter(checkForEvenNo));

//split
String.prototype.split = function(delimeter, limit){
    let res = [];
    if(delimeter === ''){
        res = Array.from(this);
    }
    else {
        const splitString = (str , i) => {
            if(i>=this.length){
                return;
            }
            const index = str.indexOf(delimeter);
            if(index>=0){
                res.push(str.substring(0, index));
                splitString(str.substring(index+delimeter.length), index+delimeter.length);
            } else {
                res.push(str);
            }
        };
        splitString(this, 0);
    }
    if(limit){
        res = res.filter((value, index)=>{
            if(index<limit){
                return true;
            }
        });
    }
    return res;
};

console.log("How are you Manas Jain?".split('a', 3));

//reduce
Array.prototype.reduce = function(callback, initialValue){
    const array = this;
    if(!array){
        throw Error("Cannot read properties of null (reading 'reduce')");
    }
    
    const n = array.length;
    
    if(!n){
        if(initialValue===0){
            return initialValue;
        }
        if(!initialValue){
            throw Error("Reduce of empty array with no initial value");
        }

        return initialValue;
    }

    let i = 0;
    if(!initialValue){
        initialValue = array[i++];
    }
    while(i<n){
        initialValue = callback(initialValue, array[i++], array);
    }

    return initialValue
};

const sum = (prev, curr) => prev+curr;
console.log([1,2,3,4].reduce(sum, 1));

//promiseAll
const dummyAPI = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
};

const tasks = [dummyAPI(1000), dummyAPI(2000), dummyAPI(3000)];

const promiseAllPollyfill = (promises) => {
    
    return new Promise((resolve, reject)=>{
        const res = [];
        promises.forEach((promise, index) => {
            promise.then((data)=>{
                res[index] = data;
                if(index === promises.length-1) {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    });
};

promiseAllPollyfill(tasks).then((data) => {
    console.log(`All fulfilled promises ${data}`);
}).catch((err) => {
    console.log(`Error is ${err}`);
})

//setTimeOut, clearTimeOut
function createSetTimeout(){
    let timerId = 1;
    let timerMap = {};

    function setTimeoutPollyfill(callback, delay, ...args) {
        let id = timerId++;
        timerMap[id] = true;
        let start = Date.now();

        function triggerCallback(){
            if(!timerMap[id]){
                return;
            }

            if(Date.now()>start+delay){
                callback.apply(this, args);
            } else {
                requestIdleCallback(triggerCallback);
            }
        }

        requestIdleCallback(triggerCallback);
        return id;
    }

    function clearTimeoutPollyfill(id){
        delete timerMap[id];
    }

    return {setTimeoutPollyfill, clearTimeoutPollyfill};
}


let {setTimeoutPollyfill, clearTimeoutPollyfill} = createSetTimeout();

console.log("Start");

let myId1 = setTimeoutPollyfill(function(name){
    console.log(`Welcome ${name}`);
}, 1000, "Manas");


console.log("End");

//setInterval, clearInterval
function createInterval(){
    let intervalId = 1;
    let intervalMap = {};

    let {setTimeoutPollyfill, clearTimeoutPollyfill} = createSetTimeout();

    function setIntervalPollyfill(callback, delay, ...args) {
        let id = intervalId++;

        function reiterate(){
            intervalMap[id] = setTimeoutPollyfill(function(){
                callback.apply(this, args);
                if(intervalMap[id]){
                    reiterate();
                }
            }, delay);
        }
        reiterate();
        return id;
    }

    function clearIntervalPollyfill(id){
        clearTimeoutPollyfill(id);
        delete intervalMap[id];
    }

    return {setIntervalPollyfill, clearIntervalPollyfill};
}


let {setIntervalPollyfill, clearIntervalPollyfill} = createInterval();
let counter = 0;

let myId2 = setIntervalPollyfill(function(name){
    console.log(`Welcome ${name}`);
    counter++;
    if(counter>=5){
        clearIntervalPollyfill(myId2);
    }
}, 1000, "Manas");

//bind
const name = {
    firstName : "Manas",
    lastName : "Jain"
};

const printBio = function(hometown, state, country){
    console.log(`${this.firstName} ${this.lastName}, ${hometown}, ${state}, ${country}`);
}

Function.prototype.bindPollyfill = function(...args){
    const fn = this;
    let params = args.slice(1);
    return (...args2) => {
        params = params.concat(args2);
        fn.apply(args[0], params);
    };
}

const printManas = printBio.bindPollyfill(name, "Ghaziabad");
printManas("UP", "India");