
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let precioAlBarato;
	let fabAlBarato;
	let cantAlBarato;
	let flagAlcohol = 1;
	let acumAlcohol = 0;
	let acumBarbijo = 0;
	let acumJabon = 0;
	let contAlcohol = 0;
	let contBarbijo = 0;
	let contJabon = 0;
	let promedio ;
	let mayorTipo;

	for(let i=0 ; 5 < 1 ; i++){
		
		tipo = prompt("Ingrese tipo (barbijo/jabon/alcohol): ").toLowerCase();
		while (tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon"){
			tipo = prompt ("Tipo invalido. Reingrese tipo (barbijo/alcohol/jabon): ").toLowerCase();
		}
		
	}
}
/*
 ESTRATEGIA DE RESOLUCION
1-DECLARAR VARIABLES
cosas que le tngo q pedir al usuario --> tipo/precio/cantidad/marca/fabricante
punto a --> cantAlBarato / fabAlBarato / precioAlBarato / flagAlcohol
punto b --> acumBarbijo / acumAlcohol / acumJabon / contBarbijo / contAlcohol / contJabon / promedio
punto c --> acumJabon utilizada en el punto b
------------------------------------------------------------------- 
2- GENERAR UN BUCLE QUE SE REPITA 5 VECES (FOR)
cosas que se tienen que hacer 5 veces(van dentro del bucle)
2.1 pido tipo/valido tipo
2.2 pido precio/valido precio
2.3 pido cantidad/valido cantidad
2.4 pido marca
2.5 pido fabricante
------------------------------------------}
3- COSAS QUE TENGO QUE HACER PARA PODER CONTESTAR EL PUNTO A
3.1 me fijo si es un alcohol
si es alcohol me fijo si es la primera vez que se ingresa alcohol o ya se habia ingresado previamente
si es la primera vez cambio el flag. guardo el precio la cantidad y el fabricante como alcohol barato
y por cada alcohol me fijo si es mas barato que el que ya tengo como barato, y de ser asi
actualizo los datos del alcohol barato
3.2 me fijo el tipo de producto (barbijo/alcohol/jabon) y actualizo el acum y cont segun corresponda
------------------------------------------
4- COSAS QUE TENGO QUE HACER DESPUES EL FOR
me fijo cual fue el tipo con mas unidades vendidas y calculo el promedio


*/
