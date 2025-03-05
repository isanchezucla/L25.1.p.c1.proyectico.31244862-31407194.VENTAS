export default class Cl_vVenta {
    constructor(){
        this.inCliente = document.getElementById("ventaForm_inCliente");
        this.inFactura = document.getElementById("ventaForm_inFactura");
        this.inCosto = document.getElementById("ventaForm_inCosto");
        this.inCnArticulos = document.getElementById("ventaForm_inCnArticulos");
        this.btProcesar = document.getElementById("ventaForm_btProcesar");
    }
    get cliente() {
        return this.inCliente.value;
    }
    get factura() {
        return +this.inFactura.value;
    }
    get costo() {
        return +this.inCosto.value;
    }
    get cnArticulos() {
        return +this.inCnArticulos.value;
    }
}