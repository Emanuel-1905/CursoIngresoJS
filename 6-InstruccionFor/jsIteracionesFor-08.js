function mostrar()
{
	

	let numero = parseInt(prompt("Ingrese un numero: "));
	while(isNaN(numero)){
	numero = parseInt(prompt("Error. Ingrese un numero"))
	}
	let contador = 0;
	for (let i = 2; i < numero; i++)
	{
		if(!(numero % i ))
		{
			contador++;
			
		}
	}
	if(contador == 0)
	{
		alert(numero + " es primo")
	}else{
		alert(numero + " no es primo")
	}
	

}//FIN DE LA FUNCIÓN