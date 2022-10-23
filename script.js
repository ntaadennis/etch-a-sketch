const container = document.querySelector('.container');
const black = "rgb(22, 22, 22)"
const white = "#fff"

function clearSquares() {
    for (let i = 0; i < squares.length; i++) {
        changeColor(squares[i], white)
    }
}

function changeColor(e, color) {
    e.style.backgroundColor = color;
}

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
}


const squares = document.querySelectorAll('.square');

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function (e) { changeColor(e.target, black) })
}
