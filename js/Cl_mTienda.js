export default class Cl_mTienda {
    constructor(montoCaja, porcIncremento){
        this.montoCaja = montoCaja;
        this.porcIncremento = porcIncremento;
        this.acumMonto = 0;
        this.mayorMonto = 0;
        this.auxNombre = "";
        this.contClientes1Articulo = 0;
        this.incremento = 0;
    }
    set montoCaja(montoCaja){
        this._montoCaja = +montoCaja;
    }
    get montoCaja(){
        return this._montoCaja;
    }
    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;
    }
    get porcIncremento() {
        return this._porcIncremento;
    }
    procesarVenta(venta) {
        this.incremento = (venta.monto() * this.porcIncremento) / 100;
        this.acumMonto += venta.monto() + this.incremento;
        if (venta.monto() > this.mayorMonto) {
            this.mayorMonto = venta.monto();
            this.auxNombre = venta.cliente;
        }
        if (venta.cnArticulos === 1) {
            this.contClientes1Articulo++;
        }
        else {
            return 0;
        }
    }
    totalCaja() {
        return this.montoCaja + this.acumMonto;
    }
    clienteMayorPago() {
        return this.auxNombre;
    }
    clientes1Articulo() {
        return this.contClientes1Articulo;
    }
}