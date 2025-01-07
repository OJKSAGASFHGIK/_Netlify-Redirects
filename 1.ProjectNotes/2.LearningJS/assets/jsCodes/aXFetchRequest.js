
// link: https://www.youtube.com/watch?v=MouZdENJddQ&t=168s
// package code download in terminal: npm install axios
// to print in powershell: node the_path_of_file.js
const axios = require('axios');
axios.get('https://portfolio-2dot0.netlify.app/')
    .then(aResult => { console.log(aResult.data); })
    .catch(aError => { console.log(aError); });


// other forms:
/* //form 1
const https = require('https');

https
    .get('https://portfolio-2dot0.netlify.app/', (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            console.log(data);
        });
    })
    .on('error', (error) => {
        console.log(error);
    });
*/
/* //form 2
const adress = 'https://jsonplaceholder.typicode.com/users';
const endpoint = 'qualquer'
const verb = 'GET'

async function fetchDados() {
    const absorverDados = await fetch(adress + endpoint, {method: verb})
    const esperarDados = await absorverDados.json()
    console.log(esperarDados)
}

fetchDados()
*/