// 1.) Refactor using ES2015: 

const filterOutOdds = (...args) => args.filter (v => v % 2 === 0 );

// 2.) findMin

const findMin = (...args) => Math.min(...args);

// 3.) mergeObjects

const mergeObjects = (obj1, obj2) => ({...obj1, obj2});

// 4.) doubleAndReturnArgs

const doubleAndReturnArgs = (numArr, ...numArgs) => [...numArr, ...numArgs.map(v => v * 2)];

// Slice & Dice Functions 

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj }
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {

    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}