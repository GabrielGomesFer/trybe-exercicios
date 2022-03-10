function soma (num1, num2){
    return num1 + num2;
}
function sub (num1, num2){
    return num1 - num2;
}
function mult (num1, num2){
    return num1 * num2;
}
function div (num1, num2){
    return num1 / num2;
}
function mod (num1, num2){
    return num1 % num2;
}

//ex2
function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else {
      return segundoNum + ' é maior que ' + primeiroNum;
    }
  }