let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Evite repetição de código
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Texto inicial
exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

// Função principal
function verificarChute() {
  let chute = Number(document.querySelector("input").value);

  if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");

        let palavraTentativas = tentativas > 1 ? "Tentativas" : "Tentativa";
        let mensagemTentativas = 
          `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;

        exibirTextoNaTela("p", mensagemTentativas);

  } else {

        if (chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor que " + chute);
        } else {
            exibirTextoNaTela("p", "O número secreto é maior que " + chute);
        }

        tentativas++;
  }
}

// Gerador de número aleatório
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
