'use strict'

// *********************USANDO NODE Y REQUIRE 
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// rl.question('Cuando pesas', (peso) => {
//     rl.question('Cuanto mides: ', (altura) => {
//         const IMC = Math.round(peso / Math.pow(altura/100,2)*100)/100;

//         console.log('Tu peso es de : ', peso);
//         console.log('Tu altura es de: ', altura /100 + " m.");
//         console.log('Tu IMC es de: ', IMC);
//         switch(true){
//             case (IMC < 19):
//                 console.log('Estás por debajo de tu peso ideal');
//                 break;
//             case (IMC >= 19 && IMC < 24.5):
//                 console.log('Estas en tu peso ideal');
//                 break;
//             case (IMC >= 24.5 && IMC < 29.9):
//                 console.log('Estás por encima de tu peso ideal');
//                 break;
//             case (IMC >= 30):
//                 console.log('Obesidad');
//                 break;
//         }

//         rl.close();
//     })
//})

//************************************** */ USANDO DOM


function calcular(){
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('estatura').value

    const IMC = Math.round(peso/Math.pow(altura/100,2)*100)/100;

    var height = document.getElementById('height');
    height.textContent = 'Tu estatura es de: ' + Math.round((altura / 100) *100) / 100

    var weight =document.getElementById('weight')
    weight.textContent = 'Tu peso es de: '+ peso

    var resultado = document.getElementById('IMC')
    resultado.textContent = 'Segun los datos proporcionados tu IMC es de: ' + IMC
    
    switch(true) {
        case (IMC < 19):
            document.getElementById('demo').innerHTML= '<span style="color:red; font-weight:700">Estás por debajo de tu peso ideal</span>'
            break;
        case (IMC >= 19 && IMC < 24.5):
            document.getElementById('demo').innerHTML= '<span style="color:green; font-weight:700">Estas en tu peso ideal</span>'
            break;
        case (IMC >=24.5 && IMC < 29.9):
            document.getElementById('demo').innerHTML = '<span style="color:orange; font-weight:700">Estas por encima de tu peso ideal</span>'
            break;
        case (IMC >= 30):
            document.getElementById('demo').innerHTML = '<span style="color:red; font-weight:700">Obesidad</span>'
            break;
    }

}




