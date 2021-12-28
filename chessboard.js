const size = 8;
let square = ' ';
for (let y=0; y<size; y++) {
    let row = '';
    for (let x=0; x<size; x++) {
        row += square;
        square = (square === ' ') ? '#' : ' ';
    }
    console.log(row);
    square = (square === ' ') ? '#' : ' ';
}
