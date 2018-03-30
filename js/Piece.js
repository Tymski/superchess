class Piece {

  set color(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  set symbol(symbol) {
    this._symbol = symbol;
  }

  get symbol() {
    return this._symbol;
  }

  set position({
    x,
    y
  }) {
    this.x = x;
    this.y = y;
  }

  get position() {
    return {
      x: this.x,
      y: this.y
    };
  }

  set context(ctx) {
    this._ctx = ctx;
  }

  get context() {
    return this._ctx;
  }

  constructor({
    color = white,
    symbol = "X",
    x = null,
    y = null,
    context = ctx
  }) {
    this.color = color;
    this.symbol = symbol;
    this.x = x;
    this.y = y;
    this.context = context;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.clear()
    this.context.fillText(this.symbol, this.x * unit, unit * (this.y + 8 / 9));
  }

  clear() {
    this.context.clearRect(this.x * unit, this.y * unit, unit, unit);
  }

  move(position) {
    this.clear();
    this.position = position;
    this.draw();
  }

}

// Does the Piece live only in canvas context?
// Should piece know in which canvas he lives, or should it be known by Pieces class?