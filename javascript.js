let size = 10;
let mouseDown = 0;
gridSize = 500;

document.body.onmousedown = function () {++mouseDown;}
document.body.onmouseup = function () {--mouseDown;}


createSquare(size);
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    reset(size);
});
const sizeButton = document.getElementById('size');
sizeButton.addEventListener('click', () => {
    changeSize();
});

function createSquare(size) {
    const board = document.querySelector("#sketchpad");
    for (let i = 0; i < size; i++){
        const column = document.createElement('div');
        column.setAttribute('class','column');
        for (let j = 0; j < size; j++) {
            const row = document.createElement('button');
            row.setAttribute('class','row');
            row.style.width = gridSize/size + 'px';
            row.style.height = gridSize/size + 'px';
            row.classList.add('content')
            row.addEventListener('click', () => {
                row.style.backgroundColor = 'black';
            });
            row.addEventListener('mouseover', () => {
                if (mouseDown === 1){
                    row.style.backgroundColor = 'black';
                }
            });

            column.append(row);
        }
        board.append(column);
    }
}

function reset(size) {
    const sketchPad = document.querySelector('#sketchpad');
    sketchPad.remove();
    const newSketchPad = document.createElement('div');
    newSketchPad.setAttribute('id','sketchpad');
    const board = document.querySelector('#board');
    board.append(newSketchPad);
    createSquare(size);

}

function changeSize() {
    let check = 0;
    while (check === 0){
        newSize = prompt('What size would you like the sketch pad to be? (1 - 40)');
        if (newSize < 1 || newSize > 40){
            alert("Please choose a valid option");
        } else {
            size = newSize;
            check = 1;
        }
    }
    reset(size)
}

