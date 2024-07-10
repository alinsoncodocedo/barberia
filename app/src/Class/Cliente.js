class Cliente {
    constructor(idCli, nombre, apellido, telefono, correo, reservacion) {
        this._idCli = idCli;
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._correo = correo;
        this._reservacion = reservacion;
    }

    //Getters
    get getIdCli() {
        return this._idCli;
    }
    get getNombre() {
        return this._nombre;
    }
    get getApellido() {
        return this._apellido;
    }
    get getTelefono() {
        return this._telefono;
    }
    get getCorreo() {
        return this._correo;
    }
    get getReservacion() {
        return this._reservacion;
    }

    //Setters
    setIdCli(idCli) {
        this._idCli = idCli;
    }
    setNombre(nombre) {
        this._nombre = nombre;
    }
    setApellido(apellido) {
        this._apellido = apellido;
    }
    setTelefono(telefono) {
        this._telefono = telefono;
    }
    setCorreo(correo) {
        this._correo = correo;
    }
    setReservacion(reservacion) {
        this._reservacion = reservacion;
    }
}

export default Cliente;
