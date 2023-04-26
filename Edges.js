function Cube() {
    this.edges = [
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

    this.turn = function (face) {
        switch (face) {
            case "R":
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                break;
            case "L":
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                break;
            case "F":
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                break;
            case "U":
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                break;
            case "D":
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                break;
            case "B":
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                break;
            case "R'":
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                break;
            case "L'":
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                break;
            case "F'":
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                break;
            case "U'":
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                break;
            case "D'":
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                break;
            case "B'":
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                break;
            case "R2":
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                this.cycleFour(12, 13, 14, 15);
                this.cycleFour(1, 19, 21, 9);
                break;
            case "L2":
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                this.cycleFour(4, 5, 6, 7);
                this.cycleFour(3, 11, 23, 17);
                break;
            case "F2":
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                this.cycleFour(8, 9, 10, 11);
                this.cycleFour(2, 15, 20, 5);
                break;
            case "U2":
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                this.cycleFour(0, 1, 2, 3);
                this.cycleFour(8, 4, 16, 12);
                break;
            case "D2":
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                this.cycleFour(20, 21, 22, 23);
                this.cycleFour(10, 14, 18, 6);
                break;
            case "B2":
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                this.cycleFour(16, 17, 18, 19);
                this.cycleFour(0, 7, 22, 13);
                break;
            default:
                throw new Error(`"${face}" is not a valid move.`);
        }
    };

    this.doTurns = function (turns) {
        var turnsFormated = turns.split(/\s/g);
        for (var i = 0; i < turnsFormated.length; i++) {
            this.turn(turnsFormated[i]);
        }
    };

    this.cycleFour = function (a, b, c, d) {
        [this.edges[a], this.edges[b], this.edges[c], this.edges[d]] = [this.edges[d], this.edges[a], this.edges[b], this.edges[c]];
    };

    this.getOtherSide = function (piece) {
        let edgesOriginal = [
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
        return this.getNumber(edgesOriginal[piece][1]);
    };

    this.getLetter = function (num) {
        var letter = String.fromCharCode(num + 1 + 64);
        return letter;
    };

    this.getNumber = function (letter) {
        var number = letter.charCodeAt(0) - 65 - 32;
        return number;
    };

    this.checkIfSolved = function () {
        let edgesOriginal = [
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
        for (var i = 0; i < this.edges.length; i++) {
            if (edgesOriginal[i][0] != this.edges[i][0]) {
                return false;
            }
        }
        return true;
    };
    //     var uniqueArray = [];
    //     for (i = 0; i < array.length; i++) {
    //         if (uniqueArray.indexOf(array[i]) === -1) {
    //             uniqueArray.push(array[i]);
    //         }
    //     }
    //     return uniqueArray;
    // };
    this.swapEdges = function (edge) {
        [this.edges[this.getOtherSide(edge)], this.edges[12]] = [this.edges[12], this.edges[this.getOtherSide(edge)]];
        [this.edges[edge], this.edges[1]] = [this.edges[1], this.edges[edge]];
    };

    this.getOptions = function () {
        let options = [];
        let edgesOriginal = [
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
        for (var i = 0; i < this.edges.length; i++) {
            if (this.edges[i][0] !== edgesOriginal[i][0]) {
                if (this.edges[i][0] !== "b" && this.edges[i][0] !== "m") {
                    options.push(this.edges[i][0]);
                    //console.log(options)
                }
            }
        }
        return options;
    };

    this.checkIfBufferIsSolved = function () {
        if (this.edges[1][0] == "b" || this.edges[1][0] == "m") {
            return true;
        } else {
            return false;
        }
    };

    this.generateMemo = function () {
        var memo = [];
        while (!this.checkIfSolved()) {
            if (this.checkIfBufferIsSolved()) {
                memo.push(this.getOptions()[0]);
                this.swapEdges(this.getNumber(this.getOptions()[0]));
            } else {
                memo.push(this.edges[1][0]);
                this.swapEdges(this.getNumber(this.edges[1][0]));
            }
        }
        //console.log("Memo Completed");
        //console.log(memo);
        if (memo.length % 2 !== 0) {
            memo.push("parity alg");
        }
        return memo;
    };
}

