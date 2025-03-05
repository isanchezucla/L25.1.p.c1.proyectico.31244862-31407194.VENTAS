import Cl_mVenta from "./Cl_mVenta.js";
import Cl_vVenta from "./Cl_vVenta.js";

export default class Cl_vTienda {
    constructor() {
        this.controlador = null;
        this.inMontoCaja = document.getElementById("mainForm_inMontoCaja");
        this.inPorcIncremento = document.getElementById("mainForm_inPorcIncremento")
        this.btIniciar = document.getElementById("mainForm_btIniciar");
        this.tabla = document.getElementById("mainForm_tabla");
        this.salida = document.getElementById("mainForm_salida");
        this.vVenta = new Cl_vVenta();
        this.vVenta.btProcesar.onclick = () => this.controlador.procesarVenta();
        this.vVenta.btProcesar.hidden = true;
        this.btIniciar.onclick = () => {
            this.controlador.iniciarTienda(
                this.inMontoCaja.value,
                this.inPorcIncremento.value,
            );
            this.inMontoCaja.disabled = true;
            this.inPorcIncremento.disabled = true;
            this.btIniciar.hidden = true;
            this.vVenta.btProcesar.hidden = false;
        };
    }
    procesarVenta() {
        this.mVenta = new Cl_mVenta({
            cliente: this.vVenta.cliente,
            factura: this.vVenta.factura,
            costo: this.vVenta.costo,
            cnArticulos: this.vVenta.cnArticulos,
        });
        return this.mVenta;
    }
    reportarVenta(
        totalCaja,
        clienteMayorPago,
        clientes1Articulo,
    ){
        this.tabla.innerHTML += `<tr>
        <td>${this.mVenta.cliente}</td>
        <td>${this.mVenta.factura}</td>
        <td>${this.mVenta.costo}</td>
        <td>${this.mVenta.cnArticulos}</td>
        </tr>`
        this.salida.innerHTML = `
        <br> Monto final en caja: ${totalCaja}
        <br> Cliente que pagó el monto mayor: ${clienteMayorPago}
        <br> Cantidad de clientes que sólo llevaron 1 articulo: ${clientes1Articulo}<br>`
    };
}