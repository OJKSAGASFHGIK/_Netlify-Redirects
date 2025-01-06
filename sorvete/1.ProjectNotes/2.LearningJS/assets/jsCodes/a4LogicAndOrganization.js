let ids1 = {};
for (let for1=1; for1<=4; for1++) {
    ids1[`id1p${for1}`] = document.getElementById(`id1p${for1}`); }

let ids2 = {};
for (let for1=1; for1<=4; for1++) {
    ids2[`id2p${for1}`] = document.getElementById(`id2p${for1}`); }

let ids3 = {};
for (let for1=1; for1<=4; for1++) {
    ids3[`id3p${for1}`] = document.getElementById(`id3p${for1}`); }

let ids4 = {};
for (let for1=1; for1<=4; for1++) {
    ids4[`id4p${for1}`] = document.getElementById(`id4p${for1}`); }


// // // if else if else
let a1p1Hours = new Date().getHours();
let a1p1Minutes = new Date().getMinutes();
let a1p2Salutation;
if (a1p1Hours < 6) {a1p2Salutation = "It's early morning.";
} else if (a1p1Hours < 12) {a1p2Salutation = "It's morning.";
} else if (a1p1Hours < 18) {a1p2Salutation = "It's afternoon.";
} else {a1p2Salutation = "It's night."}
ids1.id1p1.textContent= a1p2Salutation+" - "+a1p1Hours+":"+a1p1Minutes ;

// a1p2 id1p1
function funcP1p1Day() {
    let a1p3Day = new Date().getDay();

    switch (a1p3Day) {
        case 0 || 6:
            document.getElementById("id1p3Msg").innerHTML = "End of week"; break;
        default:
            document.getElementById("id1p3Msg").innerHTML = "Midle of week";
    }
}

// a1p3 id1p3 funcP1p1


// // // functions
function funcP2p1(a1, a2) { return a1 + a2; }
let a2p1 = funcP2p1(1, 2);
ids2.id2p1.textContent= a2p1 ;

// a2p1 funcP2p1
document.getElementById("noteP2p1").textContent = `-HTML:
<input id="id2p2input" type="text" placeholder="Put your name">
<button onclick="funcP2p2()" style="padding:27px;"></button>
<p id="id2p2output"></p>

-JS:
function funcP2p2() {
    let a2p2input = document.getElementById("id2p2input").value;
    let a2p2output = document.getElementById("id2p2output");
    
    if (a2p2input == "" || a2p2input == null) {
        a2p2output.innerHTML = "It's missing something";
        a2p2output.style.color = "red";
    } else {   
        a2p2output.innerHTML = "It's ok";
        a2p2output.style.color = "green";
    }
}
`;

function funcP2p2() {
    let a2p2input = document.getElementById("id2p2input").value;
    let a2p2output = document.getElementById("id2p2output");
    
    if (a2p2input == "" || a2p2input == null) {
        a2p2output.innerHTML = "It's missing something";
        a2p2output.style.color = "red";
    } else {   
        a2p2output.innerHTML = "It's ok";
        a2p2output.style.color = "green";
    }
}

// a2p2 funcP2p2 id2p2 noteP2p1


// // // Classes
class ClassP3p1Person {
    constructor(name, cpf, zipCode) {
        this.name = name; this.cpf = cpf; this.zipCode = zipCode;
    }

    eat() {
        return this.name + " was working, now will eat.";
    }
}

function funcP3p1() { 
    let a3p1Gustavo = new ClassP3p1Person("Gustavo", 1, 1);
    document.getElementById("id3p1Gustavo").innerHTML= a3p1Gustavo.eat() + `<br>
    CPF: ${a3p1Gustavo.cpf} / Zip Code: ${a3p1Gustavo.zipCode}`;
}

// // // Repetitive Structures
document.getElementById("noteP4p1").textContent = `for (let forP4p1Year = new Date().getFullYear(); forP4p1Year >= 1870; forP4p1Year--) {
    document.getElementById("id4p1Date").innerHTML +=
    "<option value="+forP4p1Year+">"+ forP4p1Year +"</option>";
} `

for (let forP4p1Year = new Date().getFullYear(); forP4p1Year >= 1870; forP4p1Year--) {
    document.getElementById("id4p1Date").innerHTML += `
    <option value="${forP4p1Year}"> ${forP4p1Year} </option>`;
}
