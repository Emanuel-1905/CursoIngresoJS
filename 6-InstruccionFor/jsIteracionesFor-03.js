function mostrar()
{
	// al presionar el botón pedir la cantidad de veces que 
	//quiero repetir el mensaje "Hola UTN FRA"

	let mensaje = "Hola UTN FRA";
	let cantidad;

	cantidad = parseInt(prompt("¿Cuantas veces quiere mostrar el mensaje?"));
	while(isNaN(cantidad)){
		cantedad = parseInt(prompt("Solo puede ingresar numeros. Intente nuevamente"));
	}

	for (let i =0 ;i < cantidad ; i++){
		alert(mensaje);
	}


}//FIN DE LA FUNCIÓN