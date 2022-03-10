let maiorprimo = 0;

for (numcresc = 0; numcresc <= 50; numcresc++) {
  let primo = true;
  for (let divisor = 2; divisor < numcresc; divisor++) {
    if (numcresc % divisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorprimo = numcresc;
  }
}

console.log(maiorprimo);
