/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{ // 1- Declaro variables
 	let precio = 35;
    let cantidad;
    let marca;
    let porcDescuento;
    let impuesto;

    //2- levantar los datos (cantidad, marca)

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    
    switch (cantidad){
        case 1:
        case 2:
            descuento = 0;
            break;
        
        case 3:
            if (marca == "ArgentinaLuz"){
                porcDescuento = 0.15;
            }else if (marca == "FelipeLamparas"){
                porcDescuento == 0.10;
            }else{
                porcDescuento = 0.5;
            }
            break;

        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                porcDescuento = 0.25;
            }else{
                porcDescuento = 0.20;
            }

        case 5:
            if (marca == "ArgentinaLuz"){
                porcDescuento = 0.40;
            }else{
                porcDescuento = 0.30
            }
            break;
    default:
        porcDescuento = 0.50;

    //Fin del switch

            }

    //3- de acuerdo a la cantidad comprada y a la marca, calculo el porc de descuento
    

    }


    // estrategia de resolucion
    // 1- Declaro variables
    //1.1 precio/cantidad/marca/porDescuento/impuestoFinal/IIBB
    //2- levantar los datos (cantidad, marca)
    //3- de acuerdo a la cantidad comprada y a la marca, calculo el porc de descuento
    //4- una vez que tengo el % de descuento, calculo el precio de una lampara con el desc.
    //5- escribo en la caja de texto inferior el precio unit de la lampara
    //6- calculo el importe final(precio de la lampara con descuento * la cantidad de lamparas)
    //7- me fijo si corresponde calcular el impuesto, y de ser asi, lo calculo
    //8- muestro el importe final y de corresponder el impuesto
    

