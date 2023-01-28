const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        const argsToString = JSON.stringify(args);
        if(argsToString in cache){
            console.log(`Fetching from cache for args ${argsToString}`);
            return cache[argsToString];
        } else {
            console.log(`Computing value for args ${argsToString}`);
            const result = fn.apply(null, args);
            cache[argsToString] = result;
            return result;
        }
    };
}

const addThreeNums = (a,b,c) => a+b+c;
const addMemoized = memoize(addThreeNums);
console.log(addMemoized(1,2,3));
console.log(addMemoized(1,2,3));


//memoization for recursive functions
const factorial = memoize((x) => {
    if(x<=1){
        return 1;
    } else {
        return x*factorial(x-1);
    }
})

console.log(factorial(5));
console.log(factorial(6));