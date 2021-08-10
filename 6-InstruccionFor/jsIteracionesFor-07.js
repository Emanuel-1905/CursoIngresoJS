function mostrar()
{

	let numero;
	let contadorDiv =0;

	numero = parseInt(prompt("Ingrese un numero: "));
	while(isNaN(numero))
	numero = parseInt(prompt("Error. Ingrese un numero"))

	for (let i= 1; i <= numero; i++)
	{
		if(!(i % 1 ))
		{
			contadorDiv++;
			console.log(i);
		}
	}
	console.log("Numeros divisores encontrados " + contadorDiv);


}//FIN DE LA FUNCIÓN