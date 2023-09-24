
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let valor3 = document.getElementById("valor3");
let valor4 = document.getElementById("valor4");
let valor5 = document.getElementById("valor5");

let quantidade1 = document.getElementById("qtd1");
let quantidade2 = document.getElementById("qtd2");
let quantidade3 = document.getElementById("qtd3");
let quantidade4 = document.getElementById("qtd4");
let quantidade5 = document.getElementById("qtd5");

//valor projeto1 = valor 1 * quantidade 1.

function calcular() {
    let valorProjeto1 = Number(valor1.value) * (quantidade1.value);
    let valorProjeto2 = Number(valor2.value) * (quantidade2.value);
    let valorProjeto3 = Number(valor3.value) * (quantidade3.value);
    let valorProjeto4 = Number(valor4.value) * (quantidade4.value);
    let valorProjeto5 = Number(valor5.value) * (quantidade5.value);

    let valorTotal = valorProjeto1 + valorProjeto2 + valorProjeto3 + valorProjeto4 + valorProjeto5;

    alert(`El valor del projeto 1 é: R$ ${valorProjeto1}\n
    El valor del projeto 2 é: R$ ${valorProjeto2}\n
    El valor del projeto 3 é: R$ ${valorProjeto3}\n
    El valor del projeto 4 é: R$ ${valorProjeto4}\n
    El valor del projeto 5 é: R$ ${valorProjeto5}\n
    y el valor total de los 5 projetos é R$ ${valorTotal}`)

}