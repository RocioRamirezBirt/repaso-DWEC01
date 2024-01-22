'use strict'

const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Cuanto pesas',(peso) => {
    rl.question('Cuanto mides ? ',(altura) => {
        const IMC = Math.round(peso / Math.pow(altura / 100,2)*100) /100;
        console.log('tu peso es de ', peso);
        console.log('tu altura es de ', altura / 100 + " m.");
        console.log('Tu IMC es de ', IMC);
        switch(true){
            case (IMC < 19):
                console.log('Estas por debajo de tu peso ideal');
                break;
            case (IMC >= 19 && IMC < 24.5):
                console.log('Estas en tu peso ideal');
                break;
            case (IMC >= 24.5 && IMC < 29.9):
                console.log('Estas por encima de tu peso ideal');
                break;
            case (IMC > 30):
                console.log('Obesidad');
                break;
            default:
                console.log('error')
                break;
        }
        rl.close();
    })
})