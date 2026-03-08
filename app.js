// let titulo = document.querySelector("h1");

// titulo.innerHTML = "Jogo do número secreto";

// // Case Sensitive: Diferencia maiúsculas e minúsculas 
// let paragrafo = document.querySelector("p");

// paragrafo.innerHTML = "Escolha um número entre 1 e 10"

// Declarar função

let listaDeNumerosSorteados = [];
let numeroMaximoDisponivel = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Evite a repetição de código com funções!
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

// invorcar ou usar a função


 // Funcionalidade / função com parâmetros
  function verificarChute() {
  // corpo
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
          exibirTextoNaTela("h1", "Acertou!");
        // ternario
        let palavraTentativas = tentativas > 1 ? "Tentativas" : "Tentativa";

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela("p", mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");

      } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor que " + chute);
        } 
        else {
            exibirTextoNaTela("p", "O número secreto é maior que " + chute);
        }
        tentativas++
        limparCampo()
        
      }
  }

  function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
  }

  function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial()
   document.getElementById("reiniciar").setAttribute("disabled", true)
 
  }

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroMaximoDisponivel + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroMaximoDisponivel) {
    listaDeNumerosSorteados = []
   }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }
   else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
   }
  }
// function verificarChute() {
//     alert("Eu amo JS")
// }

// function verificarChute() {
//     alert("Olá tudo bem? ")
//     let lembreiVoce = prompt("Qual é o nome da sua cidade? ")

//     alert(`Estive em ${lembreiVoce} e lembrei de você :D`)

// }