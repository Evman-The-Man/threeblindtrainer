function OtherCube() {
    //done
    this.corners = [
        ["a", "e", "r"],
        ["b", "q", "n"],
        ["c", "m", "j"],
        ["d", "i", "f"],
        ["e", "r", "a"],
        ["f", "d", "i"],
        ["g", "l", "u"],
        ["h", "x", "s"],
        ["i", "f", "d"],
        ["j", "c", "m"],
        ["k", "p", "v"],
        ["l", "u", "o"],
        ["m", "j", "c"],
        ["n", "b", "q"],
        ["o", "t", "w"],
        ["p", "v", "k"],
        ["q", "n", "b"],
        ["r", "a", "e"],
        ["s", "h", "x"],
        ["t", "w", "o"],
        ["u", "g", "l"],
        ["v", "k", "p"],
        ["w", "o", "t"],
        ["x", "s", "h"],
    ];

    //done
    this.turn = function (face) {
        switch (face) {
            case "R":
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                this.cycleFour(2, 16, 22, 10);
                break;
            case "L":
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                this.cycleFour(0, 8, 20, 18);
                break;
            case "F":
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                this.cycleFour(3, 12, 21, 6);
                break;
            case "U":
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                this.cycleFour(9, 5, 17, 13);
                break;
            case "D":
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                this.cycleFour(11, 15, 19, 7)
                break;
            case "B":
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                this.cycleFour(1, 4, 23, 14);
                break;
            case "R'":
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                this.cycleFour(2, 16, 22, 10);
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                this.cycleFour(2, 16, 22, 10);
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                this.cycleFour(2, 16, 22, 10);
                break;
            case "L'":
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                this.cycleFour(0, 8, 20, 18);
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                this.cycleFour(0, 8, 20, 18);
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                this.cycleFour(0, 8, 20, 18);
                break;
            case "F'":
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                this.cycleFour(3, 12, 21, 6);
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                this.cycleFour(3, 12, 21, 6);
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                this.cycleFour(3, 12, 21, 6);
                break;
            case "U'":
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                this.cycleFour(9, 5, 17, 13);
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                this.cycleFour(9, 5, 17, 13);
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                this.cycleFour(9, 5, 17, 13);
                break;
            case "D'":
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                this.cycleFour(11, 15, 19, 7)
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                this.cycleFour(11, 15, 19, 7)
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                this.cycleFour(11, 15, 19, 7)
                break;
            case "B'":
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                this.cycleFour(1, 4, 23, 14);
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                this.cycleFour(1, 4, 23, 14);
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                this.cycleFour(1, 4, 23, 14);
                break;
            case "R2":
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                this.cycleFour(2, 16, 22, 10);
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                this.cycleFour(2, 16, 22, 10);
                break;
            case "L2":
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                this.cycleFour(0, 8, 20, 18);
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                this.cycleFour(0, 8, 20, 18);
                break;
            case "F2":
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                this.cycleFour(3, 12, 21, 6);
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                this.cycleFour(3, 12, 21, 6);
                break;
            case "U2":
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                this.cycleFour(9, 5, 17, 13);
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                this.cycleFour(9, 5, 17, 13);
                break;
            case "D2":
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                this.cycleFour(11, 15, 19, 7)
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                this.cycleFour(11, 15, 19, 7)
                break;
            case "B2":
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                this.cycleFour(1, 4, 23, 14);
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                this.cycleFour(1, 4, 23, 14);
                break;
            default:
                throw new Error(`"${face}" is not a valid move.`);

        }
    };

    //done
    this.doTurns = function (turns) {
        var turnsFormated = turns.split(/\s/g);
        for (var i = 0; i < turnsFormated.length; i++) {
            this.turn(turnsFormated[i]);
        }
    };

    //done
    this.cycleFour = function (a, b, c, d) {
        [this.corners[a], this.corners[b], this.corners[c], this.corners[d]] = [this.corners[d], this.corners[a], this.corners[b], this.corners[c]];
    };

    //done?
    this.getOtherSide = function (piece) {
        let cornersOriginal = [
            ["a", "e", "r"],
            ["b", "q", "n"],
            ["c", "m", "j"],
            ["d", "i", "f"],
            ["e", "r", "a"],
            ["f", "d", "i"],
            ["g", "l", "u"],
            ["h", "x", "s"],
            ["i", "f", "d"],
            ["j", "c", "m"],
            ["k", "p", "v"],
            ["l", "u", "o"],
            ["m", "j", "c"],
            ["n", "b", "q"],
            ["o", "t", "w"],
            ["p", "v", "k"],
            ["q", "n", "b"],
            ["r", "a", "e"],
            ["s", "h", "x"],
            ["t", "w", "o"],
            ["u", "g", "l"],
            ["v", "k", "p"],
            ["w", "o", "t"],
            ["x", "s", "h"],
        ];
        return [this.getNumber(cornersOriginal[piece][1]), this.getNumber(cornersOriginal[piece][2])];
    };

    //done
    this.getLetter = function (num) {
        var letter = String.fromCharCode(num + 1 + 64);
        return letter;
    };

    //done
    this.getNumber = function (letter) {
        var number = letter.charCodeAt(0) - 65 - 32;
        return number;
    };

    //done
    this.checkIfSolved = function () {
        let cornersOriginal = [
            ["a", "q"],
            ["b", "m"],
            ["c", "i"],
            ["d", "e"],
            ["e", "d"],
            ["f", "l"],
            ["g", "x"],
            ["h", "r"],
            ["i", "c"],
            ["j", "p"],
            ["k", "u"],
            ["l", "f"],
            ["m", "b"],
            ["n", "t"],
            ["o", "v"],
            ["p", "j"],
            ["q", "a"],
            ["r", "h"],
            ["s", "w"],
            ["t", "n"],
            ["u", "k"],
            ["v", "o"],
            ["w", "s"],
            ["x", "g"],
        ];
        for (var i = 0; i < this.corners.length; i++) {
            if (cornersOriginal[i][0] != this.corners[i][0]) {
                return false;
            }
        }
        return true;
    };

    this.swapCorners = function (corner) {
        [this.corners[this.getOtherSide(corner)[0]], this.corners[17]] = [this.corners[17], this.corners[this.getOtherSide(corner)[0]]];
        [this.corners[this.getOtherSide(corner)[1]], this.corners[0]] = [this.corners[0], this.corners[this.getOtherSide(corner)[1]]];
        [this.corners[corner], this.corners[4]] = [this.corners[4], this.corners[corner]];
    };

    //maybe done
    this.getOptions = function () {
        let options = [];
        let cornersOriginal = [
            ["a", "e", "r"],
            ["b", "q", "n"],
            ["c", "m", "j"],
            ["d", "i", "f"],
            ["e", "r", "a"],
            ["f", "d", "i"],
            ["g", "l", "u"],
            ["h", "x", "s"],
            ["i", "f", "d"],
            ["j", "c", "m"],
            ["k", "p", "v"],
            ["l", "u", "o"],
            ["m", "j", "c"],
            ["n", "b", "q"],
            ["o", "t", "w"],
            ["p", "v", "k"],
            ["q", "n", "b"],
            ["r", "a", "e"],
            ["s", "h", "x"],
            ["t", "w", "o"],
            ["u", "g", "l"],
            ["v", "k", "p"],
            ["w", "o", "t"],
            ["x", "s", "h"],
        ];
        for (var i = 0; i < this.corners.length; i++) {
            if (this.corners[i][0] !== cornersOriginal[i][0]) {
                if (this.corners[i][0] !== "e" && this.corners[i][0] !== "a" && this.corners[i][0] !== "r") {
                    options.push(this.corners[i][0]);
                    //console.log(options)
                }
            }
        }
        return options;
    };

    this.checkIfBufferIsSolved = function () {
        if (this.corners[0][0] == "a" || this.corners[0][0] == "e" || this.corners[0][0] == "r") {
            return true;
        } else {
            return false;
        }
    };

    this.generateMemo = function () {
        var memo = [];
        while (!this.checkIfSolved()) {
            if (this.checkIfBufferIsSolved()) {
                memo.push(this.getOptions()[0])
                this.swapCorners(this.getNumber(this.getOptions()[0]));
            } else {
                memo.push(this.corners[4][0]);
                this.swapCorners(this.getNumber(this.corners[4][0]));
            }
        }
        return memo;
    };

}

