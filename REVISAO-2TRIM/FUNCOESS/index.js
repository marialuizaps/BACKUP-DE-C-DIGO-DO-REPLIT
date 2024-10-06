// DECLARAR FUNÇÕES

function imprimeOla() {
  console.log("Olá");
}

function olaPessoa(nome) {
  console.log("Olá, " + nome);
}

let salario = 1000;

//SET INTERVAL
setInterval(function () {
  salario = salario + 100;
  console.clear();
  console.log(`Salario: R$${salario},00`);
}, 2000);

// CRIE UMA FUNÇÃO QUE RETORNE UM OBJETO JS
// EXECUTE ESTA FUNÇÃO A CADA 1s ATRAVÉS DE UMA
// FUNÇÃO SET INTERVAL()

function retornaObjeto() {
  return {
    nome: "Luiz",
    idade: 30,
    profissao: "Engenheiro",
  };
}

setInterval(retornaObjeto, 1000);

// INVOCAR AS FUNÇÕES
// imprimeOla();
// olaPessoa("Ana");
// olaPessoa("Bia");

