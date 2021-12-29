function reverseArray(arr) {
    let newArray = [];
    let i = arr.length-1;
    while (newArray.length < arr.length) {
        newArray.push(arr[i]);
        i--;
    }
    return newArray;
}

function reverseArrayInPlace(arr) {
    let i = 0;
    while (i < arr.length) {
        let el = arr.pop();
        arr.splice(i,0,el);
        i++;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArrayInPlace([2,4,6,8,10]));
