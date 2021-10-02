let WIDTH;
let HEIGHT;
let CELL_SIZE;

// Scale everything to fit on mobile devices
function calcCanvasWidth() {

    // Let room for border
    const min = Math.min(window.innerWidth, window.innerHeight) - 180;

    const canvSize = Math.min(min, 420) - (Math.min(min, 420) % 21);

    CELL_SIZE = Math.floor(canvSize / 21);
    WIDTH = canvSize;
    HEIGHT = canvSize;
}

calcCanvasWidth();

let c1_ctx = document.getElementById('canvas-1').getContext('2d');
c1_ctx.canvas.width = WIDTH;
c1_ctx.canvas.height = HEIGHT;

let canvas = document.getElementById('qr-code-1');
let ctx = canvas.getContext('2d');
ctx.canvas.width = WIDTH;
ctx.canvas.height = HEIGHT;

let orientRect =
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1],
    ];

let orientSize = 7;

function drawCell(x, y) {
    ctx.fillStyle = "black";
    ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    ctx.fill();
}

function drawPattern(pattern, startX, startY, dimX, dimY) {
    for (let y = 0; y < dimY; y++) {
        for (let x = 0; x < dimX; x++) {
            if (pattern[x][y] == 1) {
                drawCell(x + startX, y + startY);
            }
        }
    }
}

ctx.fillStyle = "white";
ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
ctx.fill();

drawPattern(orientRect, 0, 0, orientSize,orientSize);
drawPattern(orientRect, 21-orientSize, 0, orientSize,orientSize);
drawPattern(orientRect, 0, 21-orientSize, orientSize,orientSize);