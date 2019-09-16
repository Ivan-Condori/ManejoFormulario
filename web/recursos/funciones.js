function validarForma (forma){
    //Validar el usurio
    var usuario = forma.uaurio;
    if (usuario.value == "" || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    //Validar el password
    var password = forma.password;
    if (password.value == "" || password.value.length < 3){
        alert("Debe proporcionar un password al menos de 3 caracteres");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    //Validamos las tecnologias de interes
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    
    //revisamos si se selecciono algun checkbox
    for (i = 0; i < tecnologias.length; i++){
        if (tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    if (!checkSeleccionado){
        alert("Debe proporcionar una tecnologia");
        return false;
    }
     //Validamos el genero
     var generos = forma.genero;
     var radioSeleccionado = false;
     
     //revisamos si se selecciono algun radiobutton
     for (i = 0; i<generos.length; i++){
         if(generos[i].cheked){
             radioSeleccionado = true;
         }
     }
     if (!radioSeleccionado){
         alert("Debe seleccionar el Genero");
         return false;
     }
     
     //Validamos la ocupacion
     var ocupacion = forma.ocupacion;
     if (ocupacion.value == ""){
         alert("Debe seleccionar una ocupacion")
         return false;
     }
     
     //Formulario validado
     alert("Formulario valido, enviando datos...");
     return true;
}

