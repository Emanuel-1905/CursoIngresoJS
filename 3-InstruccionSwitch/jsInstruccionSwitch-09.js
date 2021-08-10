function mostrar () 
{
	let precioBase = 15000;
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){
		case "Invierno":
			if ( destino == "Bariloche" ){
				alert ("El precio final es de: " + precioBase * 1.2);
			}
			else if ( destino == "Cataratas" || destino == "Cordoba" ) {
				alert ("El precio final es de: " + precioBase * 1.2);
			}
			else ( destino == "Mar del Plata" ) {
				alert ("El precio final es de: " + precioBase * .9);
			}
			

		case "Verano":
			if ( destino == "Bariloche"){
				alert ("El precio final es de: " + precioBase * .8);
			}
			else if ( destino == "Cataratas" || destino == "Cordoba" ){
				alert ("El precio final es de: " + precioBase * .9);
			}
			else ( destino == "Mar del Plata") {
				alert ("El precio final es de: " + precioBase * 1.2);
			}
			break;

		case "Otonio":
		case "Primavera":
			if ( destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del Plata"){
				alert ("El precio final es de: " + precioBase * 1.1);
			}
			else if ( destino == "Cordoba") {
				alert ("El precio final es de: " + precioBase);
			}
			break;
	}
	    


}
