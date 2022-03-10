// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
let number = 0;

for(i=50; i<=100; i++){
    number += i;
}
console.log(number);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.

let number2 = 0;

for(index =1; index <= 125; index++){
    if(index % 3 === 0){
        number2 += 1

    }
}
if(number2 ===50){
    console.log("deu 50");
}
console.log(number2);

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

jogador1 =  Math.floor(Math.random() * (3-1) + 1) ;
jogador2 =  Math.floor(Math.random() * (3-1) + 1) ;

if(jogador1 === jogador2){
    console.log("empate")
}else if(jogador1===1 && jogador2 ===2){
    console.log("Jogador 1 ganha")
}else if(jogador1===2 && jogador2 ===3){
    console.log("Jogador 1 ganha")
}else if(jogador1===3 && jogador2 ===1){
    console.log("Jogador 1 ganha")
}else{
    console.log("jogador 2 ganha")
}

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.


// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.










