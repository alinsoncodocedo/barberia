class Empleado {
    constructor(rut, nombre, apellido, puesto, sueldo, horario) {
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.sueldo = sueldo;
        this.horario = horario;
    }

    //Getters
    get getRut() {
        return this.rut;
    }
    get getNombre() {
        return this.nombre;
    }
    get getApellido() {
        return this.apellido;
    }
    get getPuesto() {
        return this.puesto;
    }
    get getSueldo() {
        return this.sueldo;
    }
    get getHorario() {
        return this.horario;
    }

    //Setters
    setRut(rut) {
        this.rut = rut;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    setPuesto(puesto) {
        this.puesto = puesto;
    }
    setSueldo(sueldo) {
        this.sueldo = sueldo;
    }
    setHorario(horario) {
        this.horario = horario;
    }
}

export default Empleado;
