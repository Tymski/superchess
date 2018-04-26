# SuperChess is a superset of chess
It will be a generalization of the classical chess game. It will be a combination of many board games.

## Features:

N x M chessboard

All pieces from shogi, chess and checkers playing on the same board.

### Custom pieces
* There will be very generic piece, that can have many diiferent properties. For example to create piece that works like a knight and a rook at the same time. Just drop 2 move patterns into a piece object and here you go.
* Some piece idea: Rook that moves only on black squares.

### Custom rules
* for example: You lose the game when your opponent's king reaches certain square(s). It will allow for implementing racing kings (or king of the hill) really easily. 
* Other example: Any piece that didn't move in 20 moves, dies.
* Other example: After 10 moves, the pawn that moved the most number of times, promotes to a queen automatically.
* Other example: You may choose not to move.
* Other example: If any piece has no empty squares around him, it dies to suffocation.
* Other example: You can capture your own pieces.
* Other example: You can drop your own pieces you captured as in Crazy House game.

### Custom game modes
* For example: 
Making moves at the same time: 
Each player makes a move in secret to other players. After all player submit their move(s), the moves are all played at the same time. There will be additional rules for what happens if 2 players put their piece on the same square and so on... In this mode there will mode for 1, 2, 3... moves per round. 
So, I plan to make e4 d4 nf3 and the submit. Opponent planned to do e5 d5 c6. All these moves happen at the same time.
* Other example: real time strategy: pieces have speed property and you can plan their movement in real time. Pieces move in real time like in rts games.

## Dev ideas:
Node.js on the server side.
HTML + JavaScript + CSS for the client.
Communication between server and client happens with socket.io.
Chess engine integration (artificial intelligence) - probably some simple custom engine with minimax and α-β pruning. Or a stockfish integration? That would be cool.

## When this will be implemented?
I have no idea.
