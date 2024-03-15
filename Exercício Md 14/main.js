$(document).ready(function(){
    $('#contactForm').submit(function(e){
        e.preventDefault();
        var nome = $('#nome').val();
        var email = $('#email').val();
        var mensagem = $('#mensagem').val();
        
        // Validando os campos
        if(nome == '' || email == '' || mensagem == ''){
            alert('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }
    });
});