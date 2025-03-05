/*
 VENTAS 
Se desea llevar un control de las ventas que realiza una tienda. Se tiene por cada venta: nombre del cliente, 
número de factura, costo y cantidad de artículos. Se requiere de un programa que permita el registro de esta información, 
monto inicial en caja y el porcentaje de incremento para el costo de cada venta. 
Primeros requerimientos:
- Monto final en caja 
- Cliente que pagó el monto mayor 
- Cantidad de clientes que sólo llevaron 1 articulo.
Datos de inicialización para Cl_tienda 
montoCaja: 200, 
porcIncremento: 25.00 
*/
 import Cl_vTienda from "./Cl_vTienda.js";
 import Cl_mTienda from "./Cl_mTienda.js";
 import Cl_controlador from "./Cl_controlador.js";
 
 export default class Cl_principal {
   constructor() {
     let vista = new Cl_vTienda();
     let modelo = new Cl_mTienda();
     let controlador = new Cl_controlador(modelo, vista);
     vista.controlador = controlador;
   }
 }