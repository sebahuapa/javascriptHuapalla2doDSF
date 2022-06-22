let tipoCamisa = prompt("Ingrese que tipo de camisa quiere? MANGALARGA(mc) o MANGACORTA (ml)");
let estiloCamisa;
let cantidadCamisa;
let precio;
let precioCamisaMLL = 3000; //Camisa manga larga lisa
let precioCamisaMLE = 3500; //Camisa manga larga estampada
let precioCamisaMLC = 4000; //Camisa manga larga a cuadros
let precioCamisaMCL = 2000; //Camisa manga corta lisa
let precioCamisaMCE = 2500; //Camisa manga corta estampada
let precioCamisaMCC = 3000; //Camisa manga corta a cuadros

while(tipoCamisa != 'ESC'){
    switch(tipoCamisa){
        case "ml":
            estiloCamisa = prompt("Que estilo busca? lisa, estampada o cuadros. Ingrese la primer letra")
            switch(estiloCamisa){
                case 'l':
                    alert("El precio de la camisa manga larga LISA es de: $"+ precioCamisaMLL);
                    cantidadCamisa = prompt("Cuantas quiere?");
                    resultadoConIva = (cantidadCamisa * precioCamisaMLL) * 0.21 + (cantidadCamisa * precioCamisaMLL);
                    console.log("El precio con IVA es: " + resultadoConIva);
                    resultadoSinIva = cantidadCamisa * precioCamisaMLL;
                    console.log("El precio sin IVA es: " + resultadoSinIva);
                    resultadoTarjeta = resultadoConIva + (resultadoConIva * 0.20);
                    console.log("Precio para abonar con tarjeta de credito: " + resultadoTarjeta);
                    resultadoEfectivo = resultadoSinIva - (resultadoSinIva * 0.10);
                    console.log("Precio para abonar en efectivo: " + resultadoEfectivo);
                break;
                case 'e':
                    alert("El precio de la camisa manga larga ESTAMPADA es de: $"+ precioCamisaMLE);
                    cantidadCamisa = prompt("Cuantas quiere?");
                    resultadoConIva = (cantidadCamisa * precioCamisaMLE) * 0.21 + (cantidadCamisa * precioCamisaMLE);
                    console.log("El precio con IVA es: " + resultadoConIva);
                    resultadoSinIva = cantidadCamisa * precioCamisaMLE;
                    console.log("El precio sin IVA es: " + resultadoSinIva);
                    resultadoTarjeta = resultadoConIva + (resultadoConIva * 0.20);
                    console.log("Precio para abonar con tarjeta de credito: " + resultadoTarjeta);
                    resultadoEfectivo = resultadoSinIva - (resultadoSinIva * 0.10);
                    console.log("Precio para abonar en efectivo: " + resultadoEfectivo);
                break;
                case 'c':
                    alert("El precio de la camisa manga larga a CUADROS es de: $"+ precioCamisaMLC);
                    cantidadCamisa = prompt("Cuantas quiere?");
                    resultadoConIva = (cantidadCamisa * precioCamisaMLC) * 0.21 + (cantidadCamisa * precioCamisaMLC);
                    console.log("El precio con IVA es: " + resultadoConIva);
                    resultadoSinIva = cantidadCamisa * precioCamisaMLC;
                    console.log("El precio sin IVA es: " + resultadoSinIva);
                    resultadoTarjeta = resultadoConIva + (resultadoConIva * 0.20);
                    console.log("Precio para abonar con tarjeta de credito: " + resultadoTarjeta);
                    resultadoEfectivo = resultadoSinIva - (resultadoSinIva * 0.10);
                    console.log("Precio para abonar en efectivo: " + resultadoEfectivo);
                break;
                default:
                alert("El estilo de camisa ingresado no esta en nuestra base de datos.       Porfavor actualice la pagina");
                break;
            }
        break;
        case "mc":
            estiloCamisa = prompt("Que estilo busca? lisa, estampada o cuadros. Ingrese la primer letra")
            switch(estiloCamisa){
                case 'l':
                    alert("El precio de la camisa manga corta LISA es de: $"+ precioCamisaMCL);
                    cantidadCamisa = prompt("Cuantas quiere?");
                    resultadoConIva = (cantidadCamisa * precioCamisaMCL) * 0.21 + (cantidadCamisa * precioCamisaMCL);
                    console.log("El precio con IVA es: " + resultadoConIva);
                    resultadoSinIva = cantidadCamisa * precioCamisaMCL;
                    console.log("El precio sin IVA es: " + resultadoSinIva);
                    resultadoTarjeta = resultadoConIva + (resultadoConIva * 0.20);
                    console.log("Precio para abonar con tarjeta de credito: " + resultadoTarjeta);
                    resultadoEfectivo = resultadoSinIva - (resultadoSinIva * 0.10);
                    console.log("Precio para abonar en efectivo: " + resultadoEfectivo);
                break;
                case 'e': 
                    alert("El precio de la camisa manga corta ESTAMPADA es de: $"+ precioCamisaMCE);
                    cantidadCamisa = prompt("Cuantas quiere?");
                    resultadoConIva = (cantidadCamisa * precioCamisaMCE) * 0.21 + (cantidadCamisa * precioCamisaMCE);
                    console.log("El precio con IVA es: " + resultadoConIva);
                    resultadoSinIva = cantidadCamisa * precioCamisaMCE;
                    console.log("El precio sin IVA es: " + resultadoSinIva);
                    resultadoTarjeta = resultadoConIva + (resultadoConIva * 0.20);
                    console.log("Precio para abonar con tarjeta de credito: " + resultadoTarjeta);
                    resultadoEfectivo = resultadoSinIva - (resultadoSinIva * 0.10);
                    console.log("Precio para abonar en efectivo: " + resultadoEfectivo);
                break;
                case 'c': 
                    alert("El precio de la camisa manga corta a CUADROS es de: $"+ precioCamisaMCC);
                    cantidadCamisa = prompt("Cuantas quiere?");
                    resultadoConIva = (cantidadCamisa * precioCamisaMCC) * 0.21 + (cantidadCamisa * precioCamisaMCC);
                    console.log("El precio con IVA es: " + resultadoConIva);
                    resultadoSinIva = cantidadCamisa * precioCamisaMCC;
                    console.log("El precio sin IVA es: " + resultadoSinIva);
                    resultadoTarjeta = resultadoConIva + (resultadoConIva * 0.20);
                    console.log("Precio para abonar con tarjeta de credito: " + resultadoTarjeta);
                    resultadoEfectivo = resultadoSinIva - (resultadoSinIva * 0.10);
                    console.log("Precio para abonar en efectivo: " + resultadoEfectivo);
                break;
                default:
                alert("El estilo de camisa ingresado no esta en nuestra base de datos.       Porfavor actualice la pagina");
                break;
            }
        break;
        default:
            alert("El tipo de camisa ingresado no esta en nuestra base de datos.       Porfavor actualice la pagina");
            break;
    }
    alert("Gracias por visitar nuestro sitio web");
    break;
}