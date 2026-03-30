$(document).ready(function () {
    $(".cep").mask("00000-000")
});

$(document).ready(function () {
    function limpa_formulario-cep() {
        $("#Estado").val("");
        $("#Cidade").val("");
        $("#Logradouro").val("");
        $("#Bairro").val("");
        $("#Complemento").val("");
    }
    $("#CEP").blur(function () {

        var cep = $(this).val().replace(/\D/g, '');

        if (cep != "") {
            var validacep = /^[0-9]{8}$/;

            if (validacep.test(cep)) {
                $("#Estado").val("...");
                $("#Cidade").val("...");
                $("#Logradouro").val("...");
                $("#Bairro").val("..");
                $("#Complemento").val("..");

                $.getJSON("https://viacap.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        $("#Estado").val(dados.uf);
                        $("#Cidade").val(dados.localidade);
                        $("#Logradouro").val(dados.logradouro);
                        $("#Bairro").val(dados.bairro);
                        $("#Complemento").val(dados.complemento);
                    }
                    else {
                        limpa_formulario_cep();
                        alert("CEP não encontrado.")
                    }
                });
            }
            else {
                limpa_formulario_cep();
                alert("Formato de CEP inválido");
            }
        }
        else {
            limpa_formulario_cep();
        }
    })
});