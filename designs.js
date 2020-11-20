// Select color input
var color;

// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let grid = document.getElementById('pixelCanvas');
    let gridWidth = document.getElementById('inputWidth');
    let gridHeight = document.getElementById('inputHeight');
    for (y = 0; y <= gridHeight.value; y++) {
        var newRow = document.createElement('tr');
        grid.appendChild(newRow);
        for (x = 0; x <= gridWidth.value; x++) {
            var newCol = document.createElement('td');
            grid.appendChild(newCol);
        }
    }
}

document.addEventListener('submit', makeGrid());
