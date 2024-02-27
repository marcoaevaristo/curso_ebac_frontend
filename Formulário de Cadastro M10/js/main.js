$(document).ready(function() {

    $('#cel').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


    $('#form').validate({
        submitHandler: function(form) {
            form.submit();
            alert('Formulário Enviado! Obrigado.');
        },
        invalidHandler: function(event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`${camposIncorretos} campos incorretos, certifique-se de que todos os campos foram preenchidos.`)
            }
        }
    });
});