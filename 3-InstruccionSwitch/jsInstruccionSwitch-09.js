function mostrar()
{   
	let precio = 15000;
	let estacion;
	let destino;

    precio = parseInt(document.getElementById("txtIdPrecio").value);
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){
		case "Verano":
			alert("Verano");
			break;

		case "Invierno":
			break;

		case "Primavera":
		case "Otonio":
			break;

	}

}//FIN DE LA FUNCIÓN