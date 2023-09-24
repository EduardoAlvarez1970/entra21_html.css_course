
let quantidade1 = document.getElementById("qtd1");
let quantidade2 = document.getElementById("qtd2");
let quantidade3 = document.getElementById("qtd3");
let quantidade4 = document.getElementById("qtd4");

let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let valor3 = document.getElementById("valor3");
let valor4 = document.getElementById("valor4");

let porcentual = document.getElementById("desconto");


function calcular() {

    let produto1 = Number(quantidade1.value) * (valor1.value);
    let produto2 = Number(quantidade2.value) * (valor2.value);
    let produto3 = Number(quantidade3.value) * (valor3.value);
    let produto4 = Number(quantidade4.value) * (valor4.value);

    porcentual = Number(porcentual.value);

    let valorSemdesconto = produto1 + produto2 + produto3 + produto4;
    let desconto = (valorSemdesconto * porcentual) / 100;
    let valorCondesconto = valorSemdesconto - desconto;

    alert(`El valor total da compra sem desconto é:\n
    ${valorSemdesconto}\n
    El valor com desconto é:\n
    ${valorCondesconto}`)
}