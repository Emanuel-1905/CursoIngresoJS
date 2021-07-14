function mostrar() {
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		alert("Usted es un adulto");
	} else {
		if (edad <= 12) {
			alert("Usted es un niño");
		} else {
			alert("Usted es adolecente");

		}
	}
}