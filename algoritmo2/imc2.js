function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);

    let categoria;
            let mensagem;

            if (imc < 18.5) {
                categoria = "Abaixo do peso";
                mensagem = "Você está abaixo do peso recomendado. Pode ser benéfico procurar um nutricionista para uma avaliação detalhada.";
            } else if (imc >= 18.5 && imc <= 24.9) {
                categoria = "Peso normal";
                mensagem = "Parabéns! Seu peso está dentro da faixa saudável. Continue mantendo um estilo de vida equilibrado.";
            } else if (imc >= 25 && imc <= 29.9) {
                categoria = "Sobrepeso";
                mensagem = "Você está em sobrepeso. É recomendável considerar ajustes na alimentação e atividade física para melhorar a saúde.";
            } else if (imc >= 30 && imc <= 34.9) {
                categoria = "Obesidade grau I";
                mensagem = "Você está com obesidade grau I. É importante consultar um profissional de saúde para orientações sobre dieta e exercícios.";
            } else if (imc >= 35 && imc <= 39.9) {
                categoria = "Obesidade grau II";
                mensagem = "Você está com obesidade grau II. É fundamental buscar a ajuda de um especialista para um plano de tratamento adequado.";
            } else {
                categoria = "Obesidade grau III";
                mensagem = "Você está com obesidade grau III. É crucial buscar orientação médica imediata para uma abordagem abrangente de saúde.";
            }
            document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)} (${categoria}). ${mensagem}`;
        }