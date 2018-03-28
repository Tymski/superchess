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

  constructor({
    color = black,
    symbol = "X",
    x = null,
    y = null
  }) {
    this.color = color;
    this.symbol = symbol;
    this.x = x;
    this.y = y;
  }
}