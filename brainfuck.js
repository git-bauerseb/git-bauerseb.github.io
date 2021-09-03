let runBtn = document.getElementById('brainfuck-run');
let compileBtn = document.getElementById('brainfuck-compile');
let stepBtn = document.getElementById('brainfuck-step');

let input = document.getElementById('brainfuck-input');
let output = document.getElementById('brainfuck-output');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 200;
const CELL_SIZE = 50;

let cells = [0];
let cellPtr = 0;

let timer;

function drawCells() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let numCells = Math.floor(CANVAS_WIDTH / CELL_SIZE);

    ctx.beginPath();

    for (let i = 0; i < numCells; i++) {
        ctx.rect(CELL_SIZE * i, 0, CELL_SIZE, CELL_SIZE);
        ctx.stroke();

        // Draw text
        if (i < cells.length) {
            ctx.font = '16px serif';
            ctx.fillText(cells[i], CELL_SIZE * i + 5, 25);
        }
    }

    ctx.closePath();


    // Draw cell pointer
    ctx.beginPath();
    ctx.arc(cellPtr * CELL_SIZE + CELL_SIZE / 2, 75, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.closePath();
}



let text = input.value;
let preprocInput = [];
let iterator = null;

cells = [0];
cellPtr = 0;

function matches(c) {
    return c == '+' || c == '-' || c == '>' || c == '<' || c == '.' || c == ','
        || c == '[' || c == ']';
}

function writeOutput(c) {
    output.value += String.fromCharCode(c);
}


function* interpret(instr) {
    let loopPosition = [];

    for (let i = 0; i < instr.length; i++) {
        let cur = instr[i];


        switch (cur) {
            case '+': cells[cellPtr]++; break;
            case '-': cells[cellPtr]--; break;
            case '>':
                cells.push(0);
                cellPtr++;
                break;
            case '<':
                cellPtr--;
                break;
            case '.':
                writeOutput(cells[cellPtr]);
                break;
            case ',':
                let in_ = prompt('<<< ');
                cells[cellPtr] = in_.charCodeAt(0);
                break;
            case '[':
                // Condition is false so search for matching ']'
                if (cells[cellPtr] == 0) {
                    while (i < instr.length && instr[i] != ']') {
                        i++;
                    }

                    if (instr[i] != ']') {
                        throw new Error('Could not find matching ] instruction');
                    }
                } else {

                    // Push position of loop onto stack
                    loopPosition.push(i);
                }
                break;

            case ']':
                // Terminate loop
                if (cells[cellPtr] == 0) {
                    if (loopPosition.length == 0) {
                        throw new Error("Found ']' without matching '['");
                    } else {
                        loopPosition.pop();

                    }
                } else {
                    let pos = loopPosition[loopPosition.length - 1];
                    i = pos == 0 ? 0 : pos - 1;
                }
                break;
            default:
                break;
        }

        drawCells();
        yield;
    }

    return;
}

function makeStep() {
    iterator.next();
}


runBtn.onclick = () => {

    cells = [0];
    cellPtr = 0;
    preprocInput = [];
    
    text = input.value;
    
    // Strip of all non 'brainfuck' characters
    for (let ch of text) {
        if (matches(ch)) {
            preprocInput.push(ch);
        }
    }
}