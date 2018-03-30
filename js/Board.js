

n = 8; // this should be Board class attribute
m = 8; // this should be Board class attribute

canvas = document.getElementById('canvas');                     // to get autocompletion, otherwise this line is useless
backgroundCanvas = document.getElementById('backgroundCanvas'); // to get autocompletion, otherwise this line is useless
foregroundCanvas = document.getElementById('foregroundCanvas'); // to get autocompletion, otherwise this line is useless
canvasWrapper = document.getElementsByClassName('canvasWrapper')[0];
layers = [backgroundCanvas, canvas, foregroundCanvas];
layers.forEach(c => {
  c.width = n * unit;
  c.height = m * unit;
});

// Multiple layers of canvas on top of each other stop events. Need to fire additional events? Any settings missing?

canvasWrapper.style.width = canvas.width + "px";    // happy css
canvasWrapper.style.height = canvas.height + "px";  // happy css 



ctx = canvas.getContext('2d');
bgctx = backgroundCanvas.getContext('2d');
fgctx = foregroundCanvas.getContext('2d');
// should we just use layers array for this?


// canvas.addEventListener('click', function (event) {
//   clickPos = {
//     x: Math.floor((event.layerX) / unit),
//     y: Math.floor((event.layerY) / unit)
//   }
//   console.log(clickPos);
//   click(clickPos.x, clickPos.y)
// }, false);

colors = [
  '#595959',  // these colors should be defined elsewhere
  '#333',
  '#999999',
  '#444'
];


// probably a Board class method:
function drawEmptyBoard(context) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // draw square({fillColor, bevelColor, bevelSize})
      context.fillStyle = colors[(i + j) % 2];
      context.fillRect(
        i * unit,
        j * unit,
        unit,
        unit
      );
      context.fillStyle = colors[(i + j) % 2 + 2];
      let mortar = 1 / 20;
      context.fillRect(
        i * unit + unit * mortar,
        j * unit + unit * mortar,
        unit - unit * mortar * 2,
        unit - unit * mortar * 2
      );
    }
  }
}
drawEmptyBoard(bgctx);

// where this should be?
ctx.font = unit + 'px "Courier New", Courier, monospace';



currentBoard = [
  ['♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖']
];




// this should be Pieces method
// Board should have pieces field
function drawPositionOnCanvas(position) {
  for (let y = 0; y < position.length; y++) {
    row = position[y];
    for (let x = 0; x < row.length; x++) {
      const element = row[x];
      if (typeof element !== 'undefined') {
        ctx.fillText(row[x], x * unit, unit * (y + 8 / 9));
      }
    }
  }
}
drawPositionOnCanvas(currentBoard);

// Nonsense code for first experiments with clicking
// function click(x, y) {
//   click.click = !click.click;
//   if (click.click) {
//     click.symbol = currentBoard[y][x];
//   } else {
//     currentBoard[y][x] = click.symbol;
//     clearCtx(ctx);
//     drawPositionOnCanvas(currentBoard);
//   }
// }

// We need entire selection system
selection = {
  x: null,
  y: null
}

ctx.fillStyle = "#fff"

//
// DRAGGING
//
drag = {};

function onPointerDown(event) {
  let position = {
    x: Math.floor(event.layerX / unit),
    y: Math.floor(event.layerY / unit)
  }
  drag.start = position;
}

function onPointerUp(event) {
  let position = {
    x: Math.floor(event.layerX / unit),
    y: Math.floor(event.layerY / unit)
  }
  drag.end = position;
  handleDrag();
  // is custom pieceDrag event better? or just call handleDrag?
}

canvas.addEventListener("pointerdown", onPointerDown);
canvas.addEventListener("pointerup", onPointerUp);


function handleDrag() {
  console.log("Drag =", JSON.stringify(drag));
}

