const target = [[1,2,3],[4,5,6],[7,8,9]];

function flatten(array) {
    return array.reduce((prev,curr) => {
        return prev.concat(curr);
    }, []);
}

console.log(flatten(target));
