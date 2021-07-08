/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	let valNum1;
	let valNum2;
	let total;

	valNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	valNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = valNum1 + valNum2;

	alert("El resultado de la suma es " + total);


}

function restar() {
	let valNum1;
	let valNum2;
	let total;

	valNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	valNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = valNum1 - valNum2;

	alert("El resultado de la suma es " + total);
}

function multiplicar() {
	let valNum1;
	let valNum2;
	let total;

	valNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	valNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = valNum1 * valNum2;

	alert("El resultado de la suma es " + total);
}

function dividir() {
	let valNum1;
	let valNum2;
	let total;

	valNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	valNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = valNum1 / valNum2;

	alert("El resultado de la suma es " + total);
}

