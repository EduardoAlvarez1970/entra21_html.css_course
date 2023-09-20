let peso1 = document.getElementById('peso1');
let peso2 = document.getElementById('peso2');
let peso3 = document.getElementById('peso3');

let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');



function calculo() {
    
    let calculo1 = Number(peso1.value) * Number(nota1.value);
    let calculo2 = Number(peso2.value) * Number(nota2.value);
    let calculo3 = Number(peso3.value) * Number(nota3.value);

    //let somanotas = Number(peso1.value) + Number(peso2.value) + Number(peso3.value);

    let somaCalculos = calculo1 + calculo2 + calculo3;

    let mediaPonderada = somaCalculos / somaNotas;
    



    alert(`A media ponderada é: ${somaCalculos}`)
    
}
