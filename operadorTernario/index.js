//OPERADOR TERNÁRIO
// SÃO USADOS PARA SIMPLIFICAR O PROCESSO DE TOMADA DE DECISÃO E, EVENTUALMENTE,SUBSTITUIR if/else

const idade = 18;

if (idade >= 18) {
  console.log("Permitida a entrada");
} else {
  console.log("Proibido para menores");
}
// COM OPERADOR TERNÁRIO
const passe = idade >= 18 ? "Permitida a entrada" : "Proibido para menores";
console.log(passe);
