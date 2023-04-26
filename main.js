var pane = $('body'),
    box = $('#pupil1'),
    box2 = $('#pupil2')
w = pane.width() - box.width(),
    d = {},
    x = 3;

function newv(v, a, b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function (e) { d[e.which] = true; });
$(window).keyup(function (e) { d[e.which] = false; });

setInterval(function () {
    box.css({
        left: function (i, v) { return newv(v, 37, 39); },
        top: function (i, v) { return newv(v, 38, 40); }
    });
    box2.css({
        left: function (i, v) { return newv(v, 37, 39); },
        top: function (i, v) { return newv(v, 38, 40); }
    });
}, 20);

window.addEventListener("keydown", function (e) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);