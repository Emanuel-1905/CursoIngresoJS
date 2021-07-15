function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
			
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 o más días");
			break;
	}
	


}//FIN DE LA FUNCIÓN
// NOTA: EL CASE DE LOS MESES RESTANTES A FEBRERO SE PODRIA CAMBIAR POR UN SOLO "DEFAULT", QUE ABARCARIA A TODOS LOS MESES, SALVO FEBRERO