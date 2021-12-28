/* Write a loop that makes seven calls to console.log to output a triangle.*/

let level = 1;
while (level < 8) {
    let layer = '';
    for (let i=0; i<level; i++) {
        layer += '#';
    }
    console.log(layer);
    level += 1;
}
