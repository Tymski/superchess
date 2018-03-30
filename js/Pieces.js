class Pieces {
    constructor({
        ctx: ctx
    }) {
        this._context = ctx;
        this.pieces = new Set();
    }

    set context(ctx){
        this._context = ctx;
    }
    get context(){
        return this._context;
    }

    getPiece({
        x,
        y
    }) {
        for(piece of this.pieces){
            if (piece.x == x && piece.y == y) {
                return piece;
            }
        };
        return null;
    }

    addPiece(piece){
        if (this.getPiece(piece)) return false; // cannot add a piece if there is a piece with the same coordinates // or should we just delete it?
        this.pieces.add(piece);
        return true;
    }

    deletePiece({x,y}){
        return this.pieces.delete(this.getPiece({x,y}));
    }
}

// get piece with position
// can we have 2 pieces on the same square?
// get from square?