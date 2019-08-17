var board = new Array();
var score = 0;

$(document).ready(function (e) {
    newgame();
});

function newgame() {
    init();
    genone();
    genone();
    genone();
    genone();
    genone();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            score += board[i][j];
        }
    }
    document.getElementById("score").innerHTML = score;
    $("#rank").append('<li class = "ranklist">' + score + '</li>');
    sortlist();

}

function init() {
    score = 0;
    document.getElementById("score").innerHTML = score;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridcell = $("#grid-cell-" + i + '-' + j);
            gridcell.css("top", getpostop(i, j));
            gridcell.css("left", getposleft(i, j));
        }
    }

    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
        }
    }
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append('<div class = "number-cell" id ="number-cell-' + i + '-' + j + '"></div>');
            var thecell = $('#number-cell-' + i + '-' + j);
            thecell.css('width', '0px');
            thecell.css('height', '0px');
            thecell.css('top', getpostop(i, j));
            thecell.css('left', getposleft(i, j));
        }
    }

}

function getpostop(i, j) {
    return 20 + i * 120;
}

function getposleft(i, j) {
    return 20 + j * 120;
}

function genone() {
    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy = parseInt(Math.floor(Math.random() * 4));
    while (true) {
        if (board[randx][randy] == 0)
            break;
        var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));
    }
    var randnum = parseInt(Math.floor(Math.random() * 100));
    board[randx][randy] = randnum;
    var numbercell = $('#number-cell-' + randx + '-' + randy);
    numbercell.css("background-color", "#eee4da");
    numbercell.css("color", "black");
    numbercell.text(randnum);
    numbercell.animate
        ({
            width: "100px",
            height: "100px",
            top: getpostop(randx, randy),
            left: getposleft(randx, randy)

        }, 50)

}

function sortlist() {
    var list, i, sw, b, should;
    var ccc;
   
    list = document.getElementById("rank");
    ccc = list.getElementsByTagName("LI");
    sw = true;
    while (sw) {
        shold = false;
        sw = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < (b.length - 1); i++) {
            if (b[i].innerHTML < b[i + 1].innerHTML) {
                should = true;
                break;
            }
        }
        if (should) {
           b[i].parentElement.insertBefore(b[i+1], b[i]);
            sw = true;
        }
    }
}