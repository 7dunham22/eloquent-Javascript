function range(start,end,step) {
    if (!step) {
        step = 1;
    }
    let result = [];
    if (start <= end) {
        while (start <= end) {
            result.push(start);
            start += step;
        }
    } else {
        while (start >= end) {
            result.push(start);
            start += step;
        }
    }

    return result;
}

function sum(nums) {
    return nums.reduce((acc,curr) => acc+curr);
}

console.log(range(1,10));
console.log(sum(range(1,10)));
console.log(range(1,10,2));
console.log(range(5,2,-1));
