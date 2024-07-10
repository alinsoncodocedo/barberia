import React, { Component } from "react";
import Empleado from "../Class/Empleado";

class ComponenteEmpleado extends Component {
    constructor(props) {
        super(props);

        this.state = { empleado: new Empleado("15-5", "Aitor", "Tilla", "Barbero", 480000, "10:00 a 18:00") };
    }

    render() {
        const { empleado } = this.state;

        return (
            <div>
                <h3>Datos del empleado</h3>
                <p>{empleado}</p>
            </div>
        );
    }
}

export default ComponenteEmpleado;
