function mostrar (){
    let edad;
    edad = parseInt(document.getElementById("txtIdEdad").value);

    if (edad <=12 || edad >=18) {
        alert ("Usted no es adolecente")
    }
}
//FIN DE LA FUNCIÓN