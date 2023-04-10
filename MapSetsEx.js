//new Set([1,1,2,2,3,4]) // [1,2,3,4]

//[...new Set("referee")].join("") // ['ref']

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// {[1,2,3]=> true, [1,2,3] => false}



const hasDuplicate = (arr) => {const setArr = new Set(arr);
    return setArr.size !== arr.length};

console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false)


////////////////////////////////////////////////////////////////////////////////////


const isVowel = (val) => {
    
    return 'aeiou'.includes(val)};

const vowelCount = (str) => {
    const strMap = new Map();
    let lowerStr = str.toLowerCase();
    (Array.from(lowerStr)).forEach((val) => { if(isVowel(val)){
        strMap.has(val) ? 
        strMap.set(val, strMap.get(val) + 1) : strMap.set(val,1);}}
        )
    return strMap;
}

console.log(vowelCount('awesome'));
console.log(vowelCount('Colt'));