function createSquare() {

    const board = document.querySelector("#board");
    for (let i = 0; i < 4; i++){
        const column = document.createElement('div');
        column.setAttribute('class','column');
        for (let j = 0; j < 4; j++) {
            const row = document.createElement('button');
            row.setAttribute('class','row');
            row.classList.add('content')
            column.append(row);
        }
        board.append(column);
    }



}

createSquare();


/*
.board {
    width: 50px;
    height: 50px;
    border: 2px;
    border-style: solid;
}
*/