const getData = (e) => {
    console.log(`Fetching data for...${e.target.value}`);
}

const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this, args);
        }, delay);
    };
}

const throttle = (fn, delay) => {
    let flag = true;
    return (...args) => {
        if(flag){
            fn.apply(this, args);
            flag = false;
            setTimeout(()=>{
                flag = true;
            }, delay);
        }
    }; 
}

//getData will be only called if time between two keyup is more than 300ms now
const getDataDebounced = debounce(getData, 300);

//getData will be called only when diff bw prev call and curr fn call is more than 300ms
const getDataThrottled = throttle(getData, 300);