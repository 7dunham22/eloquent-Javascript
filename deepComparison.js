function deepEqual(x,y) {
    if (Array.isArray(x) && Array.isArray(y) && x.length === y.length) {
        for (let i in x) {
            if (x[i] !== y[i]) {
                return false;
            }
        }
        return true;
    } else if (x === null || y === null) {
        if (x === null && y === null) {
            return true;
        }
        return false;
    } else if ((typeof x === 'object' && typeof y === 'object') && Object.keys(x).length === Object.keys(y).length) {
        for (let key in x) {
            if (!Object.keys(y).includes(key) || x.key !== y.key) {
                return false;
            }
        }
        return true;
    } else if (x === y) {return true;}
    return false;
}

console.log(deepEqual(4,4));
console.log(deepEqual(3,4));
console.log(deepEqual([1,2],[1,2]));
console.log(deepEqual([1,2],[3,2]));
console.log(deepEqual({1: 'yes', 2: 'no'}, {1: 'yes', 2: 'no'}));
console.log(deepEqual({1: 'yes', 2: 'no'}, {3: 'yes', 4: 'no'}));
console.log(deepEqual(null,null));
console.log(deepEqual(null,{}));
