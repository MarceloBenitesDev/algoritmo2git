function verificarOrdem() {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    let resultado;


if (num1 < num2 && num2 < num3) {
    resultado = "Os números estão em ordem crescente.";
} else if (num1 > num2 && num2 > num3) {
    resultado = "Os números estão em ordem decrescente.";
} else {
    resultado = "Os números estão desordenados.";
}

document.getElementById('resultado').textContent = resultado;
}