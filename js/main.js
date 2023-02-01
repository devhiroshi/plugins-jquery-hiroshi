$(document).ready(function(){



    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
            
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },
        submitHandler: function(form) {
            e,preveventDefault();
        },
        
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`${camposIncorretos} campos não preenchidos no formulário de contato, por gentileza preencher todos os campos para enviar.`);
            }
        }
    })
})




