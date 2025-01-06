document.getElementById("note1").textContent = 
'<button onclick="func1Color()">Red</button>';
function func1Color() {
    document.body.style.backgroundColor = "red";
}

// func1 note1
document.getElementById("note2").textContent =
'<button ondblclick="func2Color()">Gray</button>';
function func2Color() {
    document.body.style.backgroundColor = "gray";
}

//func2 note2
function func3OnMouseOver() {
    let div = document.getElementById("id1OnMouse");
    div.style.backgroundColor = "yellow";
}

function func3OnMouseOut() {
    let div = document.getElementById("id1OnMouse");
    div.style.backgroundColor = "magenta";
}

//id1 func3 note2
document.getElementById("note3").textContent = `
-HTML:
tag onmousemove=""

-JS:
div.append("a");
`;

function func4OnMouseMove() {
    document.getElementById("id2OnMouseMove").append("a");
}

//id2 func4 note3
function func5OnMouseDown() {
    document.getElementById("id3OnMouseDown").append("a");
}

//id3 func5 note3
function func6OnFocus() {
    document.getElementById("id4OnFocus").style.backgroundColor = "cyan";}

function func7OnChange() {
    document.getElementById("id4OnFocus").style.backgroundColor = "magenta";}

function func8OnBlur() {
    document.getElementById("id4OnFocus").style.backgroundColor = "white";}

//id4 func8 note3
function func9OnKeyDown() {
    let a1 = document.getElementById("id5Button").value;
    document.getElementById("id5Output").textContent=a1;
    }

function func9OnKeyPress() {
    let a1 = document.getElementById("id6Button").value;
    document.getElementById("id6Output").textContent=a1;
}

function func9OnKeyUp() {
    let a1 = document.getElementById("id7Button").value;
    document.getElementById("id7Output").textContent=a1;
}

//id7 func9 note3
function func10Loaded() {
    document.getElementById("id8Loaded").textContent="Page loaded";
}
function func10Resize() {
    document.getElementById("id8Loaded").textContent="Page resize";
}
