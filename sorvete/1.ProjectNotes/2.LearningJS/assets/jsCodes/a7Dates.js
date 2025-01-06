// ['12:33', '13:20']
// let a1Date = new Date();

let ids = {};
for (let for1 = 1; for1 <= 19; ++for1) {
    ids[`id${for1}`] = document.getElementById(`id${for1}`);
}

let a1DateFormats = ["new Date()",
    "new Date().getDate()",
    "new Date().getDay()",
    "new Date().getFullYear()",
    "new Date().getHours()",
    "new Date().getMilliseconds()",
    "new Date().getMinutes()",
    "new Date().getMonth()",
    "new Date().getSeconds()",
    "new Date().getTime()",
    "new Date().getTimezoneOffset()",
    "new Date().getUTCDate()",
    "new Date().getUTCDay()",
    "new Date().getUTCFullYear()",
    "new Date().getUTCHours()",
    "new Date().getUTCMilliseconds()",
    "new Date().getUTCMinutes()",
    "new Date().getUTCMonth()",
    "new Date().getUTCSeconds()",
    "new Date().getVarDate()",] ;

let a1DateFormats2 = [];
for (let for1 = 0; for1 < a1DateFormats.length; for1++) {
    a1DateFormats2[for1] = `<span style="color: red;">${a1DateFormats[for1]}</span> = `;
}

a1Date = new Date().get;
ids.id1.innerHTML = a1DateFormats2[0] + new Date();
ids.id2.innerHTML = a1DateFormats2[1] + new Date().getDate();
ids.id3.innerHTML = a1DateFormats2[2] + new Date().getDay();
ids.id4.innerHTML = a1DateFormats2[3] + new Date().getFullYear();
ids.id5.innerHTML = a1DateFormats2[4] + new Date().getHours();
ids.id6.innerHTML = a1DateFormats2[5] + new Date().getMilliseconds();
ids.id7.innerHTML = a1DateFormats2[6] + new Date().getMinutes();
ids.id8.innerHTML = a1DateFormats2[7] + new Date().getMonth();
ids.id9.innerHTML = a1DateFormats2[8] + new Date().getSeconds();
ids.id10.innerHTML = a1DateFormats2[9] + new Date().getTime();
ids.id11.innerHTML = a1DateFormats2[10] + new Date().getTimezoneOffset();
ids.id12.innerHTML = a1DateFormats2[11] + new Date().getUTCDate();
ids.id13.innerHTML = a1DateFormats2[12] + new Date().getUTCDay();
ids.id14.innerHTML = a1DateFormats2[13] + new Date().getUTCFullYear();
ids.id15.innerHTML = a1DateFormats2[14] + new Date().getUTCHours();
ids.id16.innerHTML = a1DateFormats2[15] + new Date().getUTCMilliseconds();
ids.id17.innerHTML = a1DateFormats2[16] + new Date().getUTCMinutes();
ids.id18.innerHTML = a1DateFormats2[17] + new Date().getUTCMonth();
ids.id19.innerHTML = a1DateFormats2[18] + new Date().getUTCSeconds();


// a1 id20
document.getElementById("pre2").innerHTML = 
`let a2listWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
let a2listMonths = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"];

let a2Day = new Date().getDate();
let a2Week = a2listWeek[<span style="color: red">new Date().getDay()</span>];
let a2Month = a2listMonths[<span style="color: red">new Date().getMonth()</span>];
let a2Year = new Date().getFullYear();`;

let a2listWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
let a2listMonths = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"];

let a2Day = new Date().getDate();
let a2Week = a2listWeek[new Date().getDay()];
let a2Month = a2listMonths[new Date().getMonth()];
let a2Year = new Date().getFullYear();

document.getElementById("id21Days").innerHTML = 
`Today is ${a2Week}, ${a2Month} ${a2Day}th, ${a2Year}.` ;


// id21 a2 pre2
document.getElementById("pre3").innerHTML = `new Date().toLocaleDateString("pt-BR", {dataStyle: "short"})`;
document.getElementById("id22OtherFormat").innerHTML =
new Date().toLocaleDateString("pt-BR", {dataStyle: "short"});


// id22 a3 pre3
let a4Today = new Date() ;
let a4DueDate = new Date(2024, 2, 15, 23, 59, 999) ;
function func4DueDate() { 
    return a4Today > a4DueDate ? "Passed due date" : "On schedule" ;
}

document.getElementById("id23DueDate").innerHTML = func4DueDate() ;

document.getElementById("pre4").innerHTML = 
`let a4Today = new Date() ;
let a4DueDate = new Date(2024, 2, 15, 23, 59, 999) ;
function func4DueDate() { 
    return a4Today > a4DueDate ? "Passed due date" : "On schedule" ;
}`;

// id23 a4 pre4

/* My age */
let a5Today = new Date();
let a5MyBorn = new Date(2000, 2, 21);
let a5ageInMilliseconds = a5Today - a5MyBorn;
let a5ageInYears = Math.floor(a5ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)); // Accounting for leap years
let a5ResultAge = a5ageInYears;

/* How much days to the next */
let a5MyBirthday = new Date(a5Today.getFullYear(), 2, 21) ;
function func5DaysForMyBirthday() {
    if (a5Today > a5MyBirthday) {
        a5MyBirthday = new Date(a5Today.getFullYear()+1) ; // It change just the year 
        return Math.ceil((a5MyBirthday - a5Today) / (24 * 60 * 60 * 1000)) ;
    } else {
        return Math.ceil((a5MyBirthday - a5Today) / (24 * 60 * 60 * 1000)) ;
    }
}
let a5ResultHowMuchDays = func5DaysForMyBirthday();

document.getElementById("id24myAge").innerHTML = 
`I have ${a5ResultAge}, and I'll make ${a5ResultAge+1} in 
${a5ResultHowMuchDays} days.` ;

document.getElementById("pre5").innerHTML = 
`/* My age */
let a5Today = new Date();
let a5MyBorn = new Date(2000, 2, 21);
let a5ageInMilliseconds = a5Today - a5MyBorn;
let a5ageInYears = 
Math.floor(a5ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)); 
// Accounting for leap years
let a5ResultAge = a5ageInYears;

/* How much days to the next */
let a5MyBirthday = new Date(a5Today.getFullYear(), 2, 21) ;
function func5DaysForMyBirthday() {
    if (a5Today > a5MyBirthday) {
        a5MyBirthday = new Date(a5Today.getFullYear()+1) ; 
        // It change just the year 
        return Math.ceil((a5MyBirthday - a5Today) / (24 * 60 * 60 * 1000)) ;
    } else {
        return Math.ceil((a5MyBirthday - a5Today) / (24 * 60 * 60 * 1000)) ;
    }
}
let a5ResultHowMuchDays = func5DaysForMyBirthday();`;

//