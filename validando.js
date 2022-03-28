function validar(){
    window.event.preventDefault();
    if(document.form.nombre.value==""){
        alert("Campo Nombre Obligatorio");
        document.form.nombre.focus();}
    
    else if(document.form.email.value==""){
            alert("Campo Email Obligatorio");
            document.form.email.focus();}

    else if(document.form.phone.value==""){
        alert("Campo Telefono Obligatorio");
        document.form.phone.focus();}

    else if(document.form.asunto.value==""){
        alert("Campo Asunto Obligatorio");
        document.form.asunto.focus();}

}
document.querySelector("form").addEventListener("submit",validar );





