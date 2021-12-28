function countBs(text, target) {
    let result = 0;
    if (target === undefined) {
        target = 'B';
    }
    for (let i=0; i<text.length; i++) {
        let char = text[i];
        if (char === target) {
            result += 1;
        }
    }
    return result;
}

console.log(countBs('Brandon Buckbill'));
console.log(countBs('Brandon Buckbill','a'));
