function arrayToList(array) {
    if (array.length === 0) {
        return null;
    }
    return {value: array[0], rest: arrayToList(array.slice(1))}
}

function listToArray(list) {
    let array = [];
    while (list !== null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function prepend(element, list) {
    return {value: element, rest: list}
}

function nth(list, index) {
    let i=0;
    while (i < index) {
        list = list.rest;
        i++;
    }
    return list.value;
}

console.log(arrayToList([1,2,3]));
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));
console.log(prepend(-1, { value: 2, rest: { value: 3, rest: null } }));
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } }},2));
