import React, { Component } from "react";
import Detalle from "../Class/Detalle";

class ComponenteDetalle extends Component {
    constructor(props) {
        super(props);

        this.state = { detalle: new Detalle("A1", "Un corte de pelo", "2024-05-23", 10000, empleado, cliente) };
    }

    render() {
        const { detalle } = this.state;

        return (
            <div>
                <h3>Datos del detalle</h3>
                <p>{detalle}</p>
            </div>
        );
    }
}

export default ComponenteDetalle;