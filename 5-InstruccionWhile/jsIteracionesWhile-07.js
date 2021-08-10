/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	let repuesta;
	let promedio;
	let acumulador =0;
	let contador =0;
	let numero =0;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador += numero;
		contador++;
		repuesta = prompt("Quiere ingresar otro numero?")

	} while (respuesta == "s");

	promedio = acumulador / contador;


	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
	
	
	

}//FIN DE LA FUNCIÓN