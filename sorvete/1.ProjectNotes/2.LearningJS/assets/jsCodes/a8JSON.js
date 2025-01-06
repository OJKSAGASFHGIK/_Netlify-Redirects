let a1MyAge = new Date() - new Date(2000, 2, 21);
a1MyAge = Math.floor(a1MyAge / (1000 * 60 * 60 * 24 * 365.25));

let a1Person = {
    name: "Greque",
    age: a1MyAge,
    favoriteColor: ['red', 'black', 'gray'],
};

let a1JSON_Stringify = JSON.stringify(a1Person);
document.getElementById("id1Test").innerHTML = a1JSON_Stringify.name ;
document.getElementById("pre1").innerHTML = 
`let a1MyAge = new Date() - new Date(2000, 2, 21);
a1MyAge = Math.floor(a1MyAge / (1000 * 60 * 60 * 24 * 365.25));

let a1Person = {
    name: "Greque",
    age: a1MyAge,
    favoriteColor: ['red', 'black', 'gray'],
};

let a1JSON_Stringify = <span style="color:red">JSON.stringify(a1Person)</span>;
document.getElementById("id1Test").innerHTML = a1JSON_Stringify.name ;`;


// id1 a1
let a2JSON_Parse = JSON.parse(a1JSON_Stringify);
document.getElementById("id2JSON_Parse").innerHTML = a2JSON_Parse.age ;
document.getElementById("pre2").innerHTML = 
`let a2JSON_Parse = <span style='color:red'>JSON.parse(a1JSON_Stringify)</span>;
document.getElementById("id2JSON_Parse").innerHTML = a2JSON_Parse.age ;`;


// id2 a2
const a3ajax = new XMLHttpRequest();
a3ajax.open("GET", "https://viacep.com.br/ws/59600145/json/");
a3ajax.send();

a3ajax.onload = function () {
    document.getElementById("id3Link").innerHTML = this.responseText ;
}

document.getElementById("pre3").innerHTML = 
`const a3ajax = new XMLHttpRequest();
a3ajax.open("GET", "https://viacep.com.br/ws/20720160/json/");
a3ajax.send();

a3ajax.onload = function () {
    document.getElementById("id3Link").innerHTML = this.responseText ;
}`;


// id3 a3
function a4searchCEP() {
    let a4input = document.getElementById("id4input").value;
    const a4ajax = new XMLHttpRequest();
    a4ajax.open("GET", `https://viacep.com.br/ws/${a4input}/json/`);
    a4ajax.send();

    a4ajax.onload = function () {
        //document.getElementById("id4output").innerHTML = this.responseText;
        let a4output = JSON.parse(this.responseText);

        document.getElementById("id4output").innerHTML =
        `Cep: ${a4output.cep} /
        Logradouro: ${a4output.logradouro}<br>
        Complemento: ${a4output.complemento} /
        Bairro: ${a4output.bairro}<br>
        Localidade: ${a4output.localidade} /
        Uf: ${a4output.uf}<br>
        Ibge: ${a4output.ibge} /
        Gia: ${a4output.gia}<br>
        ddd: ${a4output.ddd} /
        Siafi: ${a4output.siafi}<br>`
        ;
    }
}
