let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
info["recorrente"] = "sim";
/*    console.log("Bem-vinda, " + info.personagem);

    console.log(info);
*/
let info2 = {
  personagem:"Tio Patinhas",
  origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota:"O último MacPatinhas",
  recorrente:"sim",
}



for (let key in info && info2) { //3
  if(info.recorrente===info2.recorrente){
    recorrente = "Ambos recorrentes"
  }else{}
  console.log(info[key] + " e " + info2[key]);
}
//a
