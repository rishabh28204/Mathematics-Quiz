var start = false;
var ans;

function startgame() {
    if (start == false) {
        start = true;
        var y = 60;
        var score = 0;
        document.getElementById("resetbutton").innerHTML = "Reset Game";
        document.getElementById("timeremaining").style.display = "block";
        // const x = document.querySelector("remainingtime");
        document.getElementById("gameover").style.display = "none";
        document.getElementById("scorenum").innerHTML = score;

        // x.innerHTML = y;
        document.getElementById("remainingtime").innerHTML = y;
        genratequesans();
        countdown();

        function countdown() {
            action = setInterval(function() {
                y -= 1;
                document.getElementById("remainingtime").innerHTML = y;
                gameover();
            }, 1000)

        }

        function gameover() {
            if (y == 0) {

                clearInterval(action);

                document.getElementById("gamescore").innerHTML = score;
                document.getElementById("gameover").style.display = "block";
                document.getElementById("timeremaining").style.display = "none";
                document.getElementById("correct").style.display = "none";
                document.getElementById("wrong").style.display = "none";
                start = false;
                document.getElementById("resetbutton").innerHTML = "Start Game";
            }
        }

        function selectoperation() {
            var arr = ['+', '-', '*', 'mod'];
            var idx = Math.round(3 * Math.random());
            console.log(idx);
            return arr[idx];
        }
        // console.log((arr[0]));

        function genratequesans() {
            var x1 = 1 + Math.round(9 * Math.random());
            var x2 = 1 + Math.round(9 * Math.random());
            var op = selectoperation();
            // var op = arr[0];
            if (op == '+') {
                ans = x1 + x2;
                document.getElementById("display").innerHTML = x1 + "+" + x2;
            } else if (op == '-') {
                ans = x1 - x2;
                document.getElementById("display").innerHTML = x1 + "-" + x2;
            } else if (op == '*') {
                ans = x1 * x2;
                document.getElementById("display").innerHTML = x1 + "x" + x2;
            } else if (op == 'mod') {
                ans = x1 % x2;
                document.getElementById("display").innerHTML = x1 + "%" + x2;
            }
            console.log(x1, x2);

            var position = 1 + Math.round(3 * Math.random());
            document.getElementById("box" + position).innerHTML = ans;
            for (var i = 1; i <= 4; i++) {
                if (position == i)
                    continue;
                else {
                    var wrongans = Math.round(100 * Math.random());
                    if (wrongans == ans) {
                        while (wrongans == ans) {
                            wrongans = Math.round(100 * Math.random());
                        }
                    }
                    document.getElementById("box" + i).innerHTML = wrongans;
                }
            }
        }
        for (var i = 1; i < 5; i++) {
            document.getElementById("box" + i).onclick = function() {
                if (start == true) {
                    // var ran = document.getElementById(this).innerHTML;
                    if (this.innerHTML == ans) {
                        score += 1;
                        document.getElementById("scorenum").innerHTML = score;
                        document.getElementById("gamescore").innerHTML = score;
                        document.getElementById("correct").style.display = "block";
                        document.getElementById("wrong").style.display = "none";
                        setTimeout(function() {

                            document.getElementById("correct").style.display = "none";
                        }, 500);
                        genratequesans();
                    } else {
                        document.getElementById("correct").style.display = "none";
                        document.getElementById("wrong").style.display = "block";
                        setTimeout(function() {

                            document.getElementById("wrong").style.display = "none";
                        }, 500)
                    }
                }
            }

        }
    } else {
        location.reload();
    }
}