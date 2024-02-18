document.getElementById("meuForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos A e B
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    // Verifica se campoB é maior que campoA
    if (campoB > campoA) {
        // Se for válido, exibe mensagem positiva
        document.getElementById("mensagem").innerHTML = "Formulário válido: B é maior que A.";
        document.getElementById("mensagem").style.color = "green";
    } else {
        // Se for inválido, exibe mensagem negativa
        document.getElementById("mensagem").innerHTML = "Formulário inválido: B deve ser maior que A.";
        document.getElementById("mensagem").style.color = "red";
    }
});