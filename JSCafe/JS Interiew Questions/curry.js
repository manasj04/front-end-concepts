const ARGS_LEN = 5;

const sum = (...args) => {
    if(args.length === ARGS_LEN){
        return args.reduce((prev, curr) => prev + curr, 0);
    } else{
        const recursiveFn = (...args2) => {
            args = args.concat(args2);
            if(args.length === ARGS_LEN){
                return args.reduce((prev, curr) => prev + curr, 0);
            } else {
                return recursiveFn;
            }
        };
        return recursiveFn;
    }
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1)(2, 3, 4, 5));
console.log(sum(1)(2)(3)(4)(5));

const curryFn = () => {
    let prevSum = 0;
    return (newVal = 0) => {
        prevSum += newVal;
        return prevSum;
    }
};

const sumOfPrev = curryFn();
console.log(sumOfPrev(1));
console.log(sumOfPrev(2));
console.log(sumOfPrev(3));
console.log(sumOfPrev(4));
console.log(sumOfPrev());



//Akshay saini video
//bind method
const multiply = (x,y) => {
    console.log(x*y);
}

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

//closure method
const multiplyClosure = (x) => {
    return (y) => {
        console.log(x*y);
    }
}

const multiplyByTwoClosure = multiplyClosure(2);
multiplyByTwoClosure(6);

//sum(1)(2)....(n)()
const sumCurry = (a) => {
    return (b) => {
        if(b){
            return sumCurry(a+b);
        }

        return a;
    }
}

console.log(sumCurry(1)(2)(3)());
