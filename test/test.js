var assert = require("assert");
var board = require("../client/src/components/game/Board");
var util = require("../client/src/components/game/GameUtil");

describe('Board', function () {
    describe('#testConstructor()', function() {
        const newBoard = new board.Board();
        assert.equal(newBoard.grid[0][4], {
            color: util.Color.Black,
            occupied: true,
            piece: {
                color: util.Color.White,
                type: util.PieceType.King
            }
        });
    });
})