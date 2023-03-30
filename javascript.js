let size = 10;
let mouseDown = 0;

document.body.onmousedown = function () {++mouseDown;}
document.body.onmouseup = function () {--mouseDown;}
function createSquare(size) {
    const board = document.querySelector("#sketchpad");
    for (let i = 0; i < size; i++){
        const column = document.createElement('div');
        column.setAttribute('class','column');
        for (let j = 0; j < size; j++) {
            const row = document.createElement('button');
            row.setAttribute('class','row');
            row.classList.add('content')
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
    newSize = prompt('What size would you like the sketch pad to be?');
    console.log(newSize);
    size = newSize;
    reset(size)
}
createSquare(size);
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    reset(size);
});
const sizeButton = document.getElementById('size');
sizeButton.addEventListener('click', () => {
    changeSize();
});


/*
.board {
    width: 50px;
    height: 50px;
    border: 2px;
    border-style: solid;
}
*/