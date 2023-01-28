//deply nested array to a flattened array
//ex - [[[1,[1.1]],2,3],[4,5]] -> [1,1.1,2,3,4,5]
//any amount of nesting can be given

const flattenArray = (arr) => {
    return arr.reduce((prev, curr) => {
        if(Array.isArray(curr)){
            prev = prev.concat(flattenArray(curr));
        } else {
            prev.push(curr);
        }
        return prev; 
    }, [])
}

console.log(flattenArray([[[1,[1.1]],2,3],[4,5]]));

//deeply nested object to a flattened object
const flattenObject = (obj, parent) => {
    const finalObj = {};
    const generateFinalObject = (obj, parent) => {
        for(let key in obj){
            const newParent = parent+key;
            const value = obj[key];
            if(typeof value === "object"){
                generateFinalObject(value, newParent+".");
            } else {
                finalObj[newParent] = value;
            }
        }
    };
    generateFinalObject(obj, parent);
    return finalObj;
};

const obj = {
    A : "12",
    B : 23,
    C : {
        P : 23,
        O : {
            L : 56
        },
        Q : [1, 2]
    }
};

console.log(flattenObject(obj, ""));