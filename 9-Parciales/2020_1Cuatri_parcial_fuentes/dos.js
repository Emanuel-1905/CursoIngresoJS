function mostrar()
{//estrategia de resolucion.
/*

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

estrategia
1- declarar variables
cosas que le tengo que pedir al usuario--> tipo/precio/cantidad/marca/fabricante/
punto A cantAlBarato/fabAlBarato/precioAlBarato/flagAlcohol
punto B acumA / acumB / acumJ / contadorA / contadorB / contadorJ
punto C acumJ usada en el punto B

2- generar un bucle que se repita 5 veces ( for )
cosas que se tienen que hacer 5 veces
2.1 pido tipo / valido tipo
2.2 pido precio / valido precio
2.3 pido cantidad / valido cantidad
2.4 pido marca 
2.5 pido fabricante
-------------------------------
3- cosas que tengo que hacer para contestar el punto A

3.1 me fijo si es un alcohol
si es alcohol me fijo si es la primera vez que se ingresa alcohol o ya se habia ingresado previamente
si es la primera vez cambio el flag, guardo el precio, la cantidad y el fabricante como alcohol barato,
y por cada alcohol me fijo si es mas barato que el que ya tengo como barato y de ser asi actualizo los datos del alcohol barato
3.2 me fijo el tipo de producto ( barbijo / alcohol / jabon ) y actualizo el acumulador y el contador segun corresponda
----------------------------------------------------
4- cosas que tengor que hacer despues del for.
me fijo cual fue el tipo con mas unidades vendidas y calculo el promedio

mostrar los resultados.

*/


	let tipo
	let marca
	let precio
	let cantidad
	let fabricante


  alert("dos");
}
