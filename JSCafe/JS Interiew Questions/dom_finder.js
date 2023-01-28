const getPathFromChildToParent = (parent, child) => {
    const path = [];
    let current = child;
    while(current!=parent){
        const parentEl = current.parentElement;
        const childrenArray = Array.from(parentEl.children);
        path.push(childrenArray.indexOf(current));
        current = parentEl;
    }
    return path;
};

const getValueFromPath = (parent, path) => {
    let current = parent;
    while(path.length){
        current =  current.children[path.pop()];
    }
    return current.innerText;
};

const findNodeValue = () => {
    const rootA = document.getElementById("rootA");
    const rootB = document.getElementById("rootB");
    const nodeA = document.getElementById("nodeA");
    const path = getPathFromChildToParent(rootA, nodeA);
    return getValueFromPath(rootB, path);
};

console.log(findNodeValue());