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

    precio = parseInt(document.getElementById("txtIdPrecio").value);
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    porcDescuento = parseInt(document.getElementById("txtIdPorcDescuento").value);
    impuesto = parseInt(document.getElementById("txtIdImpuesto").value);
    
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
    }