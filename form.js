function atualizarCampos() {
    var tipoDivergencia = document.getElementById('tipoDivergencia').value;
    var camposQuantidade = document.getElementById('camposQuantidade');
    var camposValor = document.getElementById('camposValor');

    if (tipoDivergencia === 'quantidade') {
        camposQuantidade.style.display = 'block';
        camposValor.style.display = 'none';
    } else {
        camposQuantidade.style.display = 'none';
        camposValor.style.display = 'block';
    }
}

function calcularDivergencia() {
    var tipoDivergencia = document.getElementById('tipoDivergencia').value;
    var nomeComprador = document.getElementById('nomeComprador').value;
    var numeroOrdemCompra = document.getElementById('numeroOrdemCompra').value;
    var numeroNotaFiscal = document.getElementById('numeroNotaFiscal').value;
    var codigoItem = document.getElementById('codigoItem').value;
    var resultadoDiv = document.getElementById('resultado');
    var quantidadeDoItem = document.getElementById ('quantidadeItem').value;

    var mensagem = `A nota fiscal de número ${numeroNotaFiscal}, da ordem de compra de código ${numeroOrdemCompra}, realizada pelo comprador(a) ${nomeComprador}, contém uma divergência de ${tipoDivergencia}, no produto de código ${codigoItem}, `;

    if (tipoDivergencia === 'quantidade') {
        var quantidadeOrdemCompra = document.getElementById('quantidadeOrdemCompra').value;
        var quantidadeNotaFiscal = document.getElementById('quantidadeNotaFiscal').value;
        var valorUnitario = document.getElementById('valorUnitario').value;

        mensagem += `na ordem de compra foi comprado ${quantidadeOrdemCompra} e na nota fiscal está chegando ${quantidadeNotaFiscal}, excedendo em ${quantidadeNotaFiscal - quantidadeOrdemCompra} a quantidade comprada. O valor unitário é ${valorUnitario}.`;
    } else {
        var valorItemOrdemCompra = document.getElementById('valorItemOrdemCompra').value;
        var valorItemNotaFiscal = document.getElementById('valorItemNotaFiscal').value;
        var quantidadeDoItem = document.getElementById('quantidadeItem').value;
        var valorItemAcordado = quantidadeDoItem * valorItemOrdemCompra;
        var valorItemErrado = quantidadeDoItem * valorItemNotaFiscal;
        var resultadoDivergencia = valorItemErrado - valorItemAcordado ;

        mensagem += `na ordem de compra foi comprado a R$ ${valorItemOrdemCompra} e na nota fiscal está chegando a R$ ${valorItemNotaFiscal}, excedendo em R$ ${resultadoDivergencia} o valor que foi comprado.`;
    }

    resultadoDiv.innerText = mensagem;

    // Ativar o botão de copiar
    document.getElementById('btnCopiarTexto').disabled = false;
}

function copiarTexto() {
    var resultadoTexto = document.getElementById('resultado').innerText;

    var textarea = document.createElement('textarea');
    textarea.value = resultadoTexto;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('Texto copiado com sucesso!');
}
