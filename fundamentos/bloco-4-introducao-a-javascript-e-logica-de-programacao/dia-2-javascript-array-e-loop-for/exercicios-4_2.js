let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex1
for(let i = 0; i<numbers.length;i++){
    console.log(numbers[i])
}

//ex2
let somatudo = 0;

for( let index = 0; index<numbers.length; index++){
    somatudo += numbers[index]
}
console.log(somatudo);

//ex3
somamedia = 0;

for( let ind = 0; ind<numbers.length; ind++){
    somamedia += numbers[ind]
}
let media = somamedia / numbers.length;
console.log(media);


//ex4
if(media>20){
    console.log("valor maior que 20")
}else{
    console.log("valor menor ou igual a 20")
}
//ex5
let maiornum = Math.max.apply(null, numbers);

console.log(maiornum);

//ex6 
let menornum = Math.min.apply(null, numbers);

console.log(menornum)