function classificarQuadrilatero() {
    
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    const lado4 = parseFloat(document.getElementById('lado4').value);


    let resultado;

    if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
        resultado = "É um quadrado ou um losango.";
    } 
    else if ((lado1 === lado3 && lado2 === lado4) || (lado1 === lado2 && lado3 === lado4)) {
        resultado = "É um retângulo.";
    } 
    else {
        resultado = "É outro tipo de quadrilátero.";
    }
    document.getElementById('resultado').textContent = resultado;
}