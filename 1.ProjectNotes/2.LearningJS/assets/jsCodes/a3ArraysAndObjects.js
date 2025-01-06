let ids = {};
for (let for1 = 1; for1 <= 16; for1++) {
    ids[`id${for1}`] = document.getElementById(`id${for1}`);
}

//
let a1 = ["a", "b"];
let a2 = {key1:"a", key2:"b"};
a1[0] = "c";
ids.id1.textContent= "a1[0] = " +a1[0]+ " / a2.key1 = " +a2.key1+ ' / a2["key1"] = '+a2["key1"] ;

let a3 = new Array("a", "b");


//
let a4 = ["a", "c", "b", 1, 5, 3, 2];
ids.id2.textContent= a4[a4.length-1] ;

//
ids.id3.textContent= Array.isArray(a4) ;

//
let a5 = a4;
delete a5[5] ;
ids.id4.textContent= a5 ;

//
let a6 = a5;
a6.splice(5,2,3,2,1);
ids.id5.textContent= a6 ;

//
let a7 = a6;
a7.unshift("d"); a7.push("d");
ids.id6.textContent= a7 ;

//
let a8 = a7;
a8.shift(); a8.pop();
ids.id7.textContent= a8 ;

//
let a9 = a8;
let a10 = ["d", "e", "f"];
let a11 = ["g", "h"];
let a12 = a9.concat(a10,a11);
ids.id8.textContent= a12 ;

// a12
let a13 = a12.slice(1,11);
ids.id9.textContent= a13 ;

//
let a14 = a13.filter(a => a % 3 === 1 || a % 3 === 2);
ids.id10.textContent= a14 ;

//
let a15 = a14;
a15.push(15,13,12,100);
a15.sort(function(a, b) {return a - b;});
ids.id11.textContent= a15 ;

//
let a16 = a15;
function func1(a1) { return Math.max.apply(null,a1); }
function func2(a1) { return Math.min.apply(null,a1); }
ids.id12.textContent= "Maior: "+func1(a16)+" / Menor: "+func2(a16) ;

//
let a17 = a16;
function func3(a1) { return a1 > 10; }
a17 = a17.filter(func3);
ids.id13.textContent= a17 ;

//
let a18 = {
    key0:"banana",
    key1:"apple",
    key2:"mushroom",
    keyFunc1(){ return this.key1 ;},
};
a18["key3"] = "u.u" ;

delete a18["key0"];

ids.id14.textContent= a18["key1"] ;

//
ids.id15.textContent= a18[Object.keys(a18)[0]] ;
