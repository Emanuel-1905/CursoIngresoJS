/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// 1 declarar variables de sueldo aumento nuevoSueldo
	let sueldo;
	let aumento;
	let nuevoSueldo;

	// 2 conseguir el sueldo
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value );
	
	// 3 calcular el aumento
	aumento = sueldo * 0.1 ;

	// 4 calcular el nuevo sueldo
	nuevoSueldo = sueldo + aumento ;
	
	// 5 mostar al usuario el nuevo sueldo
	document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2);


}


// estrategia de resolucion
// 1 declarar variables de sueldo aumento nuevoSueldo
// 2 conseguir el sueldo
// 3 calcular el aumento
// 4 calcular el nuevo sueldo
// 5 mostar al usuario el nuevo sueldo