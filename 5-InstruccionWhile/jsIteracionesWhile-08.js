/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acumuladorPositivo = 0;
	let acumuladorNegativo = 0;
	let respuesta = 's';
	
	//tenfo que generar un bucle del tipo mientras el usuario quiera (do while)
	do{
		numero = parseInt(prompt("Ingrese un numero: "));
		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero correctamente"));
		}
		if (numero >= 0){
			acumuladorPositivo += numero;
		}else{
			acumuladorNegativo += numero;
		}
		
		respuesta = prompt("Desea ingresar otro numero? s / n");
	} while (respuesta == "s");




}//FIN DE LA FUNCIÓN