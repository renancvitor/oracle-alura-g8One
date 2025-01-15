let numeroSecreto = gerarNumeroAleatorio();

function exibeTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibeTextoTela('h1', `Jogo do número secreto.`);
exibeTextoTela('p', `Escolha um número entre 1 e 10.`);

function verificarpalpite() {
    let palpite = document.querySelector('input').value;
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}