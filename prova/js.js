
function pedirNome() {
  
    let nome = prompt("Qual é o seu nome?");
    
   
    if (nome && nome.trim() !== "") {
     
        let nomeImagem = document.getElementById("nome-imagem");
        nomeImagem.textContent = `Olá, ${nome}!`;

        
    } else {
     
        alert("Você precisa informar um nome!");
    }
}

window.onload = pedirNome;
