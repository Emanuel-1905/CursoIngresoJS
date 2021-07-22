/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	 //pido el dato 
	 clave = prompt ("Ingrese clave:  ");

	 while( clave != "utn750" ){
		 // tengo que poner una condicion que sea verdadera cuando el dato sea invalido
		  
		 // mientras el dato sea invalido, informo que es invalido, lo vuelvo a pedir
	
    clave = prompt ("Clave incorrecta. Reingrese clave :  ");

	
	}

	alert ("Clave correcta!!");
}//FIN DE LA FUNCIÓN
