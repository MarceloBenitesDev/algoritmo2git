function calcularResultado() {
    
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);


    const media = (nota1 + nota2 + nota3) / 3;

    let bonificacao = 0;
    if (media > 85) {
        bonificacao = 5;
    } else if (media >= 70 && media <= 85) {
        bonificacao = 3;
    }
    const mediaFinal = media + bonificacao;

            
            const aprovado = mediaFinal >= 70;

            
            document.getElementById('resultado').textContent = 
                `Média: ${media.toFixed(2)}, Bonificação: ${bonificacao}, Média Final: ${mediaFinal.toFixed(2)}, Status: ${aprovado ? 'Aprovado' : 'Reprovado'}`;
        }