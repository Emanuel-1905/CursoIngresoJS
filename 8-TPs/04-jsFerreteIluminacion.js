
function CalcularPrecio () 
{ // 1- Declaro variables
 	let precio = 35;
    let cantidad;
    let marca;
    let porcDescuento;
    let descuento;
    let importeFinal;
    let impuesto;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    
    switch (cantidad){
        case 1:
        case 2:
            porcDescuento = 0;
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


        }//Fin del switch
        
        descuento = precio * porcDescuento;
        precioDescuento = precio - descuento;
        document.getElementById("txtIdPrecioDescuento").value = precioDescuento;

        importeFinal = precioDescuento * cantidad;

        if (importeFinal > 120){

            impuesto = importeFinal * .1;
            importeFinal = importeFinal + impuesto;
            alert ("El importe final es $ " + importeFinal + " usted pago IIBB $ " + impuesto);
        }
        else {
            alert ("El importe final es $ " + importeFinal)
        }
    
    
    
    
    }