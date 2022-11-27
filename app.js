function filterOutOdds(...nums) {
return nums.filter((num) => num % 2 === 0);
};

function findMin(...nums){
    return nums.reduce((acc,next)=> next < acc ? next : acc);
};

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

function doubleAndReturnArgs(arr,...args){
   const newArgs = args.map((acc) => acc * 2);
   return [...arr, ...newArgs];
};

// Slice and Dice!

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx, idx + 1)];
  }

const extend = (arr1,arr2) => {
    return [...arr1, ...arr2];
};

const addKeyval = (obj,key,val) =>{
    return {...obj,[key]:val};
};

const removeKey = (obj,key) =>{
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
};

const combine = (obj1, obj2) => {
return {...obj1, ...obj2};
};

const update = (obj,key,val) => {
    let newObj = {...obj}
    newObj[key]= val;
    return newObj;
}