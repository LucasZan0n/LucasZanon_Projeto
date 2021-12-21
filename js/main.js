function validar_form_contato(){
    var nome = formcontato.nome.value;
    var email = formcontato.email.value;
    var mensagem = formcontato.mensagem.value;
    
    if(nome == ""){
        alert("Campo nome é obrigatorio!");
        formcontato.nome.focus();
        return false;
    }if(email == ""){
        alert("Campo email é obrigatorio!");
        formcontato.email.focus();
        return false;
    }if(mensagem == ""){
        alert("Campo mensagem é obrigatorio!");
        formcontato.mensagem.focus();
        return false;
    }
    alert("Mensagem enviada!");
}