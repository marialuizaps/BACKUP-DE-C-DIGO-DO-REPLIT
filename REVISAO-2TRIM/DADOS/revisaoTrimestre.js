// SET TIMEOUT / SET INTERVAL
/**
  * FUNÇÃO NATIVA QUE RECEBE ARGUMENTOS
  * CONTROLA DADOS A PARTIR DE UM INTERVALO
 */
const intervalo1 = setInterval(function () { 
  console.log("Olá");
}, 200);
// LIMPAR INTERVALO

clearInterval(intervalo1)
const timeOut1 = setTimeout(function () {
  console.log("OLá");
}, 200)
// LIMPAR INTERVALO

clearTimeout(timeOut1);
// ESTRUTURA DE DADOS
// ARRAY -> ESTRUTURA DE DADOS INDEXADA
const nomes = ["João", "Maria", "José", "Joaquim"];
nomes[2]; // José, nomes[33]// undefined
// OBJETOS LITERAIS -> ESTUTURA CHAVE/VALOR
const cachorro = {
  patas: 4;
  cor: "caramelo",
  nome: "Bob",
  castrado: false,
};
console.log(cachorro);
console.log(cachorro.cor);

Object.keys(cachorro);
Object.values(cachorro);





