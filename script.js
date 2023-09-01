
let form = document.querySelector("button");
form.addEventListener("click", function() {
    let campoA = Number(document.getElementById("campoA").value);
    let campoB = Number(document.getElementById("campoB").value);
    let mensagem_de_sucesso = "aprovado! bem vindo!";
    let mensagem_de_erro = "erro! tente novamente..."
    
    if(campoA < campoB) {
        alert(mensagem_de_sucesso);
    } else {
        alert(mensagem_de_erro);
    }
});