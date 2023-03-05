function validacion(){
    window.event.preventDefault()

    if(document.form.nombre.value==""){
        alert("Campo de nombre es obligatorio");
        document.form.nombre.focus();

    } else if(document.form.correo.value==""){
        alert("Campo de E-mail es obligatorio");
        document.form.email.focus();

    } else if(document.form.asunto.value==""){
        alert("Campo de asunto es obligatorio");
        document.form.asunto.focus();

    } else if(document.form.mensaje.value==""){
        alert("Campo de mensaje es obligatorio");
        document.form.mensaje.focus();

    } else if(document.form.correo.value.indexOf('@')==-1 || document.form.correo.value.indexOf('.')==-1){
        alert("E-mail inválido");

    }
}

document.querySelector('form').addEventListener('submit', validacion);