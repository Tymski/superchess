n = 8;
m = 8;

canvas = document.getElementById('canvas');
backgroundCanvas = document.getElementById('backgroundCanvas');
foregroundCanvas = document.getElementById('foregroundCanvas');
canvasWrapper = document.getElementsByClassName('canvasWrapper')[0];
layers = [backgroundCanvas, canvas, foregroundCanvas];
layers.forEach(c => {
  c.width = n * unit;
  c.height = m * unit;
});
canvasWrapper.style.width = canvas.width + "px";
canvasWrapper.style.height = canvas.height + "px";

ctx = canvas.getContext('2d');
bgctx = backgroundCanvas.getContext('2d');
fgctx = foregroundCanvas.getContext('2d');

canvas.addEventListener('click', function (event) {
  clickPos = {
    x: Math.floor((event.layerX) / unit),
    y: Math.floor((event.layerY) / unit)
  }
  console.log(clickPos);
  click(clickPos.x, clickPos.y)
}, false);

colors = [
  '#595959',
  '#333',
  '#999999',
  '#444'
];

function drawEmptyBoard(context) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
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

function clearCtx(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function clearSquare(position) {
  ctx.clearRect(position.x * unit, position.y * unit, unit, unit);
}


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

function click(x, y) {
  click.click = !click.click;
  if (click.click) {
    click.symbol = currentBoard[y][x];
  } else {
    currentBoard[y][x] = click.symbol;
    clearCtx(ctx);
    drawPositionOnCanvas(currentBoard);
  }
}


selection = {
  x: null,
  y: null
}

ctx.fillStyle = "#fff"