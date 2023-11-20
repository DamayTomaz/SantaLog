function gerarImagem() {
    var destinosSelecionados = [];
    var checkboxes = document.getElementsByName("destino");

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            destinosSelecionados.push(checkboxes[i].value);
        }
    }

    var horaAgendamento = new Date().toLocaleTimeString();
    var imagemAgendamento = document.getElementById("imagemAgendamento");
    imagemAgendamento.innerHTML = '';  


    var imagens = {
        'Sede': 'img/sede.png',
        'Oncologia': 'img/oncologia.png',
        'CancerCenter': 'img/cancercenter.png',
        'Farol': 'img/farol.png',
        'Guia': 'img/guia.png',
        'Poço': 'img/poço.png',
        'Sede,Oncologia,Guia': 'img/sede-oncologia-guia.png',
        'Sede,CancerCenter,Guia': 'img/sede-cancer-guia.png',
        'Sede,Farol,Guia': 'img/sede-farol-guia.png',
        'Sede,Guia,Poço': 'img/sede-poço-guia.png',
        'Sede,Oncologia': 'img/sede-oncologia.png',
        'Sede,Farol': 'img/sede-farol.png',
        'Sede,Guia': 'img/sede-guia.png',
        'Sede,CancerCenter': 'img/sede-cancercenter.png',
        'Sede,Poço': 'img/sede-poço.png',
    };

    // Combinação de destinos
    var combinacao = destinosSelecionados.join(',');
    if (imagens.hasOwnProperty(combinacao)) {
        var img = document.createElement('img');
        img.src = imagens[combinacao];
        img.alt = "Entrega agendada para: " + combinacao + " às " + horaAgendamento;
        img.style.maxWidth = "70%";
        img.style.borderRadius = "1rem";
        imagemAgendamento.appendChild(img);

        // Hora
        var horaAgendamentoTexto = document.createElement('p');
        horaAgendamentoTexto.textContent = "Carro saindo às " + horaAgendamento;
        imagemAgendamento.appendChild(horaAgendamentoTexto);
    } else {
        imagemAgendamento.textContent = "Combinação não encontrada";
    }

    imagemAgendamento.style.display = "block";
}
function copiarTexto() {
    var imagemAgendamento = document.getElementById("imagemAgendamento");
    var textoParaCopiar = imagemAgendamento.innerText;

    // Cria um elemento de área de transferência temporária
    var textarea = document.createElement("textarea");
    textarea.value = textoParaCopiar;
    document.body.appendChild(textarea);

    // Seleciona o texto e o copia para a área de transferência
    textarea.select();
    document.execCommand("copy");

    // Remove o elemento de área de transferência temporária
    document.body.removeChild(textarea);

    alert("Texto copiado com sucesso!");
}