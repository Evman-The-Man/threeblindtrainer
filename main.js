let edges = new Cube();
let corners = new OtherCube();

function generateMemo(scramble) {
    edges.doTurns(scramble);
    corners.doTurns(scramble);
    return [edges.generateMemo(), corners.generateMemo()];
}