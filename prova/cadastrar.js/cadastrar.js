
function pedirNomeEAtualizarImagem() {
   
    let nome = prompt("Qual é o seu nome?");

  
    if (nome && nome.trim() !== "") {
 
        let nomeImagem = document.getElementById("nome-imagem");
        nomeImagem.textContent = `Olá, ${nome}!`;
    } else {
        alert("Você precisa informar um nome!");
    }
}

function limparTexto() {
    let nomeImagem = document.getElementById("nome-imagem");
    nomeImagem.textContent = "Seu nome aparecerá aqui!"; 
}


window.onload = pedirNomeEAtualizarImagem;

function pedirNomeEAtualizarImagem() {
 
    let nome = prompt("Qual é o seu nome?");


    if (nome && nome.trim() !== "") {
     
        let nomeImagem = document.getElementById("nome-imagem");
        nomeImagem.textContent = `Olá, ${nome}!`;
    } else {
        alert("Você precisa informar um nome!");
    }
}


function limparTexto() {
    let nomeImagem = document.getElementById("nome-imagem");
    nomeImagem.textContent = "Seu nome aparecerá aqui!"; 
}


function cadastrarUsuario() {
    let nomeImagem = document.getElementById("nome-imagem").textContent;

    if (nomeImagem !== "Seu nome aparecerá aqui!") {
        alert("Você foi cadastrado!");
    } else {
        alert("Por favor, insira seu nome antes de se cadastrar.");
    }
}

window.onload = pedirNomeEAtualizarImagem;

