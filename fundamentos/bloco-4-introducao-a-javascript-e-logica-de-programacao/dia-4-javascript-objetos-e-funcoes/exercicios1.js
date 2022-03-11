let contra = "";
function palindromo(word) {
  contra = word.split("").reverse().join("");
  if (contra === word) {
    console.log(true);
  } else {
    console.log(false);
  }
}
palindromo("rato");

//ex2
function maiornum(arrayVal) {
  let maiorval = 0;
  for (let i in arrayVal) {
    if (arrayVal[maiorval] < arrayVal[i]) {
      maiorval = i;
    }
  }
  return maiorval;
  
}
console.log(maiornum([2, 3, 6, 7, 10, 1]));

//ex3
function menornum(arrayVal2) {
    let menorval = 0;
    for (let index in arrayVal2) {
      if (arrayVal2[menorval] > arrayVal2[index]) {
        menorval = index;
      }
    }
    return menorval;
    
  }
  console.log(menornum([2, 4, 6, 7, 10, 0, -3]));


