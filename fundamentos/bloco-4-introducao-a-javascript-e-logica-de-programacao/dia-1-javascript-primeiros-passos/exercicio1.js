//exercicio 1

let a = 10;
let b = 5;

let adicao = a + b;
let subtracao = a - b;
let multi = a * b;
let divisao = a / b;
let mod = a % b;

console.log("exercício 1: ", adicao, subtracao, multi, divisao, mod);


//exercicio 2
const mai1 = 4;
const mai2 = 5;

if(mai1 > mai2){
    console.log("exercício 2: ", mai1) 
}
else{
    console.log("exercício 2: ", mai2)
}


//exercicio 3
const a3 = 7;
const b3 = 23;
const c3 = 12;

if(a3 > b3 && a3 > c3){
    console.log("exercício 3: ", a3, "é o maior número")
}else if(b3 > a3 && b3 > c3){
    console.log("exercício 3: ", b3, "é o maior número")
}else{
    console.log("exercício 3: ", c3, "é o maior número")
}


//exercicio 4

const posorfal = -2;

if(posorfal > 0){
    console.log("exercício 4: positive")
}else if(posorfal < 0){
    console.log("exercício 4: negative")
}else{
    console.log("exercício 4: zero")
}


//exercicio 5

const ang1 = 60;
const ang2 = 80;
const ang3 = 40;

let angposi = ang1 > 0 && ang2 > 0 && ang3 > 0;
const angulosinternos = ang1 + ang2 +ang3; 

if(angposi){
    if(angulosinternos === 180){
        console.log("true");
    }else{
        console.log("false")
    }
}else{
    console.log("angulo inválido")
}