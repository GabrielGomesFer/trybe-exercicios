//arrays
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu[2];

menu.push('contato');

console.log(menu);


//For
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(var i = 0; i < groceryList.length; i++){
    console.log(groceryList[i])
}

//for of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names){
    console.log(nome)
}