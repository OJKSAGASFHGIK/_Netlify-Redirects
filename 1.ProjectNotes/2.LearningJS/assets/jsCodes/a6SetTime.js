document.getElementById("pre1").textContent = `function func1Counter() {
    document.getElementById("id1Counter").textContent = "Time beginning...";
    setTimeout(
        time = function () { document.getElementById("id1Counter").textContent = "Finish"; },
        2000,
    )
}

function func1CounterStop() {
    clearTimeout(time);
    document.getElementById("id1Counter").textContent = "Stopped";
}
`;

function func1Counter() {
    document.getElementById("id1Counter").innerHTML = "Time beginning...";
    a1time = setTimeout(
        function () { document.getElementById("id1Counter").innerHTML = "Finish"; },
        2100,
    )
}

function func1CounterStop() {
    clearTimeout(a1time);
    document.getElementById("id1Counter").innerHTML = "Stopped";
}

// func1 a1 pre1
function func2clearInterval() {
    clearInterval(a2setInterval);
}

document.getElementById("pre2").textContent = `function func2setInterval() {
    a2setInterval = setInterval(function () {
        var a2HTMLForInterval = document.getElementById("id2Counter").innerHTML;
        var a2Timer = parseInt(a2HTMLForInterval) - 1;

        if (a2Timer <= 0) {
            func2clearInterval();
            document.getElementById("id2Counter").innerHTML = "Finish!";
        } else { document.getElementById("id2Counter").innerHTML = a2Timer; }

        }, 1000)
}
`;
function func2setInterval() {
    a2setInterval = setInterval(function () {
        var a2HTMLForInterval = document.getElementById("id2Counter").innerHTML;
        var a2Timer = parseInt(a2HTMLForInterval) - 1;

        if (a2Timer <= 0) {
            func2clearInterval();
            document.getElementById("id2Counter").innerHTML = "Finish!";
        } else { document.getElementById("id2Counter").innerHTML = a2Timer; }

        }, 1000)
}

//func2 a2 pre2