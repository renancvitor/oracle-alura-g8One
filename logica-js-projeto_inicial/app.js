alert("Boas vindas ao jogo do número secreto.");

let numeroMaximo = 5000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);

let palpite;

let tentativas = 1;

while (palpite != numeroSecreto) {
    palpite = Number(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));

    if (numeroSecreto == palpite) {
        break;
    } else {
        if (palpite > numeroSecreto) {
            alert(`O número secreto é menor do que ${palpite}`);
        }
        
        else {
            alert(`O número secreto é maior do que ${palpite}`);
        }
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);

    