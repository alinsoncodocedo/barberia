class Detalle {
    constructor(idDet, descripcion, fecha, costo, empleado, cliente) {
        this._idDet = idDet;
        this._descripcion = descripcion;
        this._fecha = fecha;
        this._costo = costo;
        this._empleado = empleado;
        this._cliente = cliente;

    }

    //Getters
    get getIdDet() {
        return this._idDet;
    }
    get getDescripcion() {
        return this._descripcion;
    }
    get getFecha() {
        return this._fecha;
    }
    get getCosto() {
        return this._costo;
    }
    get getEmpleado() {
        return this._empleado;
    }
    get getCliente() {
        return this._cliente;
    }

    //Setters
    setIdDet(idDet) {
        this._idDet = idDet;
    }
    setDescripcion(descripcion) {
        this._descripcion = descripcion;
    }
    setFecha(fecha) {
        this._fecha = fecha;
    }
    setCosto(costo) {
        this._costo = costo;
    }
    setEmpleado(empleado) {
        this._empleado = empleado;
    }
    setCliente(cliente) {
        this._cliente = cliente;
    }
}

export default Detalle;
