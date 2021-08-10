function mostrar() {

	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let seguir;
	// punto a
	let promEdadRusa = 0;
	let acumEdadRusa = 0;
	let contRusa = 0;
	// punto b
	let edadMujerMayor;
	let nombreMujerMayor;
	let vacunaMujerMayor;
	let flagMujer = 1;
	//punto c
	let porcAmericanaMayor = 0;
	let contAmericanaMayor = 0;
	let contAmericana = 0;
	//punto d
	let contDosDosis = 0;
	let contVacunados = 0;
	let porcDosDosis = 0;
	//punto e
	let contChina = 0;
	let menosInoculada;
	let contMenosInoculada;

	do {
		nombre = prompt("Ingrese nombre: ");
		while (!(nombre.length >= 3 && nombre.length <= 10)) {
			nombre = prompt("Nombre demasiado largo. Reingrese nombre: ");

		}
		edad = parseInt(prompt("Ingrese edad: "));
		while (isNaN(edad) || edad < 12) {
			edad = parseInt(prompt("Edad invalida. Reingrese edad: "))
		}

		vacuna = prompt("Ingrese vacuna (rusa/china/americana): ");
		while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
			vacuna = prompt("Error. Reingrese vacuna (rusa/china/americana): ");
		}

		dosis = prompt("Ingrese dosis (p/s): ");
		while (dosis != "p" && dosis != "s" ){
			dosis = prompt ("Error. Reingrese dosis (p/s): ");
		}

		sexo = prompt("Ingrese sexo (f/m): ");
		while (sexo != "f" && sexo !="m"){
		sexo = prompt("Error. Reingrese sexo (f/m): ");
		}

		switch (vacuna){
			case "rusa":
				contRusa++ 
				break;
				case "china":
					contChina++;
					break;
				case "americana":
					contAmericana++;
					if(edad >=18){
					contAmericanaMayor++;
					}
					break;		}

		if (sexo == "f"){
			if(flagMujer || edad > edadMujerMayor){
				edadMujerMayor = edad;
				nombreMujerMayor = nombre;
				vacunaMujerMayor = vacuna;
				flagMujer = 0;
			}
		}
		if (dosis == "s"){
			contDosDosis++;
		}
		contVacunados++;

	
		seguir = prompt("Quiere ingresar otro paciente?: ");
	} while (seguir == "s");
	//////////////////////////////////termina el do while
	if (contChina < contRusa && contChina < contAmericana){
		menosInoculada = "china";
	contMenosInoculada = contChina;
	}
	else if (contRusa <= contChina && contRusa < contAmericana){
		menosInoculada = "Rusa";
		contMenosInoculada = contRusa;
	}
	else {
		menosInoculada = "americana";
		menosInoculada 
	}
	if (contAmericana != 0){
	porcAmericanaMayor = contAmericanaMayor * 100 / contAmericana;
	}

	if (contDosDosis != 0){
		porcDosDosis = contDosDosis * 100 / contVacunados;
	}

	if (contRusa != 0){
		promEdadRusa = acumEdadRusa / contRusa;
	}

	document.write("El promedio de edad de los vacunados con rusa es " + promEdadRusa + "<br>");

	if (flagMujer){
		document.write("b- No se ingresaron pacientes femeninos <br>");
	}
	else {
		document.write("b- La mayor paciente tiene" + edadMujerMayor + "años, se llama " + nombreMujerMayor + " y  le dieron la vacuna" + vacunaMujerMayor + "<br>");
	}



}//FIN DE LA FUNCIÓN