
let numeroUm = document.getElementById("numeroUm");
let numeroDois = document.getElementById("numeroDois");






function soma() {
    let soma = Number(numeroUm.value) + Number(numeroDois.value);
    alert(`A soma de ${numeroUm.value} + ${numeroDois.value} é: ${soma}`)
    
}
function substracao() {
    let substracao = Number(numeroUm.value) - Number(numeroDois.value);
    alert(`A substraçã de ${numeroUm.value} - ${numeroDois.value} é: ${substracao}`)

}
function multiplica() {
    let multiplica = Number(numeroUm.value) * Number(numeroDois.value);
    alert(`A multiplicação de ${numeroUm.value} x ${numeroDois.value} é: ${multiplica}`)

}
function divide() {
    let divide = Number(numeroUm.value) / Number(numeroDois.value);
    alert(`A divisão de ${numeroUm.value} / ${numeroDois.value} é: ${divide}`)

}