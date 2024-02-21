
// Generate board
for (let i = 1; i <= 9; i++) {
    const row = 'row' + i.toString();

    // create div with class of row
    for (let j = 1; j <= 9; j++) {
        const col = 'col' + j.toString();
        const cell = row + '_' + col;
        console.log(cell);

        // create div with class of cells per class with row
    }
}

// random starting point for map generation
const randomRow = 'row' + Math.ceil((Math.random() * 9)).toString();
const randomCol = 'col' + Math.ceil((Math.random() * 9)).toString();
const randomPoint = randomRow + randomCol;

console.log(randomPoint);

