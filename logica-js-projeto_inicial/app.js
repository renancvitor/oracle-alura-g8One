alert("Boas vindas ao jogo do número secreto.");

let numeroSecreto = parseInt(Math.random() * 100 + 1);

console.log(numeroSecreto);

let palpite;

let tentativas = 1;

while (palpite != numeroSecreto) {
    palpite = Number(prompt("Escolha um número entre 1 e 100"));

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

    