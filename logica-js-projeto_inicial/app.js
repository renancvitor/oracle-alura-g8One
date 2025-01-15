alert("Boas vindas ao jogo do número secreto.");
let numeroSecreto = 4;
console.log(numeroSecreto);

let palpite;

let tentativas = 1;

while (palpite != numeroSecreto) {
    palpite = Number(prompt("Escolha um número entre 1 e 10"));

    if (numeroSecreto == palpite) {
        alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
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
    