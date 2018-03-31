//#region UNITS
unit = 60; // size of one board square in pixels
//#endregion UNITS

//#region COLORS 
black = "#000";
white = "#fff";
//#endregion COLORS 

//#region SYMBOLS

symbols = {
    pawn: '♟',
    bishop: '♝',
    knight: '♞',
    rook: '♜',
    queen: '♛',
    king: '♚'
};

//#endregion SYMBOLS

//#region CANVAS_FUNCTIONS
function clearCtx(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function clearSquare(position) {
    ctx.clearRect(position.x * unit, position.y * unit, unit, unit);
}
//#endregion CANVAS_FUNCTIONS