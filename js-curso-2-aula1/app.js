let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibeTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMsgInicial() {
    exibeTextoTela('h1', `Jogo do número secreto.`);
    exibeTextoTela('p', `Escolha um número entre 1 e 10.`);
}

exibirMsgInicial();

function verificarpalpite() {
    let palpite = document.querySelector('input').value;

    if (palpite == numeroSecreto) {
        exibeTextoTela('h1', `Acertou!`);

        let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`;

        exibeTextoTela('p', mensagemTentativas);

        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        if (palpite > numeroSecreto) {
            exibeTextoTela('p', `O número secreto é menor do que o palpite.`);
        } else {
            if (palpite < numeroSecreto) {
                exibeTextoTela('p', `O número secreto é maior do que o palpite.`);
            }
        }
        tentativas++;
        limparCampo();
    }
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    palpite = document.querySelector('input');
    palpite.value = ``;
}