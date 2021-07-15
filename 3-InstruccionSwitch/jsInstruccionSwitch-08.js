function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino){
		case "Cataratas":
		case "Mar del plata":
			alert("En el destino seleccionado hace calor");
			break;

		case "Bariloche":
		case "Ushuaia":
			alert("En el destino seleccionado hace frio");
			break;

	}

}//FIN DE LA FUNCIÓN