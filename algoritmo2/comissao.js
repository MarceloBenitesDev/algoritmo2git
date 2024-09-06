function calcularComissao() {

    const vendas1 = parseFloat(document.getElementById('vendas1').value);
    const vendas2 = parseFloat(document.getElementById('vendas2').value);
    const vendas3 = parseFloat(document.getElementById('vendas3').value);

    const totalVendas = vendas1 + vendas2 + vendas3;

    let comissao;
    if (totalVendas < 5000) {
        comissao = 0;
    } else if (totalVendas >= 5000 && totalVendas <= 10000) {
        comissao = totalVendas * 0.05;
    } else {
        comissao = totalVendas * 0.10;
    }

    document.getElementById('resultado').textContent = `Total de Vendas: R$${totalVendas.toFixed(2)}, Comissão: R$${comissao.toFixed(2)}`;
}