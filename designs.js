// Select color input
let color = document.getElementById('colorPicker');
let paintColor = color.value;

// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let grid = document.getElementById('pixelCanvas');
    grid.innerHTML = "";

    let gridWidth = document.getElementById('inputWidth');
    let gridHeight = document.getElementById('inputHeight');
    for (y = 0; y < gridHeight.value; y++) {
        var newRow = document.createElement('tr');
        grid.appendChild(newRow);
        for (x = 0; x < gridWidth.value; x++) {
            var newCol = document.createElement('td');
            newRow.appendChild(newCol);
        }
    }
};

function paint() {
    cell.setAttribute(background-color: paintColor);
};

let gridMaker = document.getElementById('sizePicker');
let gridCell = document.querySelectorAll('td');

gridMaker.addEventListener('submit', function(event){
    event.preventDefault()
    makeGrid()
});

gridCell.addEventListener('click', function(){
    paint()
});
