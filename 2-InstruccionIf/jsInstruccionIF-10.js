function mostrar()
{
	let nota = Math.floor(Math.random() * 10 + 1);

	if (nota >=9) {
	    alert ("Excelente");
	}
    else if (nota >=4 || nota <=8){
		alert ("Aprobó");
	}
	else {
		alert ("Vamos, la proxima se puede");
	}


}//FIN DE LA FUNCIÓN