let array = ["java", "javascript", "python", "html", "css"];

let bigword = array[0];
let smallword = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i].length > bigword.length) {
    bigword = array[i];
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i].length < smallword.length) {
    smallword = array[i];
  }
}

console.log(bigword);
console.log(smallword);
