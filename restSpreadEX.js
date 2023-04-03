```jsx
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
```

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);


const findMin = (...vals) => Math.min(...vals);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturn = (arr,...rest) => ([...arr, ...rest]);

const removeRandomItems = (items) => {
    const position = Math.floor(items.length * Math.random())
    return [...items.slice(0,position),...items.slice(position+1)];
};
//removeRandomItems([23,45,67,89,56,45]);

const extend = (arr1, arr2) => ([...arr1, ...arr2]);
//extend([1,3,5],[23,45,67])

const addKeyVal = (obj, key, val) => ({...obj, key:val})
//addKeyVal({0:'a',1:'b'},3,'das');

const removeKey = (obj, key) => {
    delete obj[key];
    return{...obj};
}
//removeKey({0:'a',1:'b'},0);

const combine = (obj1, obj2) => ({...obj1, ...obj2});
//combine({0:'a',1:'b'},{2:'c',3:'d'});

const update = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

//update({0:'a',1:'b'},1,'c');