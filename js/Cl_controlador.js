export default class Cl_controlador {
    constructor(modelo, vista) {
      this.modelo = modelo;
      this.vista = vista;
    }
    procesarVenta(){
        this.modelo.procesarVenta(this.vista.procesarVenta());
        this.vista.reportarVenta(
            this.modelo.totalCaja(),
            this.modelo.clienteMayorPago(),
            this.modelo.clientes1Articulo(),
        );
    }
    iniciarTienda(montoCaja, porcIncremento){
        this.modelo.montoCaja = montoCaja;
        this.modelo.porcIncremento = porcIncremento;
    }
}