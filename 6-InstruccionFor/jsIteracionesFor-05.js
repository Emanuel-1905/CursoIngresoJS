function mostrar()
{
	let numero;
	for (;;){
		numero = parseInt(prompt("Ingrese el numero"))
	while (isNaN(numero)){
		numero = parseInt(prompt("Error. Ingrese un numero"))
	}
			if (numero ==9){
			break;
		}
	}console.log(numero);


}//FIN DE LA FUNCIÓN