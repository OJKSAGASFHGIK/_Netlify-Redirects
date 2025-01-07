let ids = {};
for (let for1 = 1; for1 <= 8; for1++) {
    ids[`id${for1}`] = document.getElementById(`id${for1}`);
}


//
let a1;
a1 = 2 + 1;
a1++;
ids.id1.textContent = a1 ;


//
let a2 = 6;
a2 += a1;
ids.id2.textContent = a2;


//
let a3, a4;
a3 = 3;
a4 = "3";
ids.id3.textContent = a3>=a4 ;
ids.id4.textContent = a3===a4 ;


//
let a5, a6, a7Bool, a8BoolOr;
a5 = 18; a6 = 3;
a7BoolAnd = false;
a8BoolOr = false;

if (a5 && a6 > 9) {
    a7BoolAnd = true;
} else if (a5 || a6 > 9) { 
    a8BoolOr = true;
}

ids.id5.textContent = a7BoolAnd ;
ids.id6.textContent = a8BoolOr ;


// id6 a8
let a9Age, a10Validator;
a9Age = 17;
a10Validator = (a9Age >= 18) ? "Maior de 18" : "Menor que 18" ;
ids.id7.textContent = a10Validator ;


// id7 a10
let a11 = !("9"===9);
ids.id8.textContent = a11;