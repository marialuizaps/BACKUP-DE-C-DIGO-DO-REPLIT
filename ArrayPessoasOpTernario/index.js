
const pessoas = [
     { nome: "Joana", sexo: "F" },
     { nome: "Mario", sexo: "M" },
     { nome: "Maria", sexo: "F" },
     { nome: "João", sexo: "M" },
     { nome: "José", sexo: "M" },
];
// console.log(pessoas[2].nome)

const meninas = []; // VAZIO
const meninos = []; // VAZIO

function filtroPessoas(arrPessoas) {
     if( typeof arrPessoas === "object") { // CHECA SE É UM ARRAY/OBJETO
          for (pessoa of pessoas) { // ITERA SOBRE CADA ITEM DE PESSOAS
               pessoa.sexo == "F" // CHECA A PROPRIEDADE "SEXO"
                    ? meninas.push(pessoa)  // CASO "F"
                    : meninos.push(pessoa) // CASO "M"
          }
     } else {
          console.error(arrPessoas); // SENÃO IMPRIME UM ERRO
          
     }
}
filtroPessoas(pessoas); // FUNÇÃO PARA REAPROVEITAMENTO DE CÓDIGO


console.log(" ---- meninas ---- ");
console.log(meninas);
console.log(" ---- meninos ---- ");
console.log(meninos);
