let player = {
  name: "Marta",
  lastname: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 1,
  },
};
console.log("A jogadora " + player.name + " " + player.lastname + " tem " + player.age+ " anos de idade.");
console.table(player);


player.bestIntTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];


console.log("a jogadora " + player.name + " " + player.lastname + "foi a melhor do mundo " + player.bestIntTheWorld.length + "vezes");
console.log("a jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalha de prata");
//teste