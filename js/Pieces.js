class Pieces {
    constructor({
        ctx: ctx
    }) {
        this.context = ctx;
        this.pieces = new Set();
    }

    set context(ctx) {
        this._context = ctx;
    }
    get context() {
        return this._context;
    }

    getPiece({
        x,
        y
    }) {
        for(let piece of pieces){
            if ((piece.x == x) && (piece.y == y)) {
                return piece;
            }
        };
        return null;
    }

    addPiece(piece) {
        if (this.getPiece(piece)) return false; // cannot add a piece if there is a piece with the same coordinates // or should we just delete it?
        this.pieces.add(piece);
        return true;
    }

    deletePiece({
        x,
        y
    }) {
        return this.pieces.delete(this.getPiece({
            x,
            y
        }));
    }

    move(from, to) {
        let piece = this.getPiece(from);
        let pieceTo = this.getPiece(to);
        if (piece != null) {
            if(pieceTo != piece)this.deletePiece(to);
            piece.move(to);
        }
    }

    draw() {
        this.pieces.forEach(piece => {
            piece.draw();
        })
    }
}

// get piece with position
// can we have 2 pieces on the same square?
// get from square?