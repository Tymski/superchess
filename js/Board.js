n = 8;
m = 8;

canvas = document.getElementById('canvas');
backgroundCanvas = document.getElementById('backgroundCanvas');
canvasWrapper = document.getElementsByClassName('canvasWrapper')[0];
backgroundCanvas.width = canvas.width = n * unit;
backgroundCanvas.height = canvas.height = m * unit;
canvasWrapper.style.width = canvas.width + "px";
canvasWrapper.style.height = canvas.height + "px";

ctx = canvas.getContext('2d');
bgctx = backgroundCanvas.getContext('2d');

canvas.addEventListener('click', function (event) {
    clickPos = {
        x: Math.floor((event.clientX - canvas.offsetLeft) / unit),
        y: Math.floor((event.clientY - canvas.offsetTop) / unit)
    }
    console.log(clickPos);
    // click(clickPos.x,clickPos.y);
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