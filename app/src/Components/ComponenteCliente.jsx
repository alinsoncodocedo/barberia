import React, { Component } from "react";
import Cliente from "../Class/Cliente";

class ComponenteCliente extends Component {
    constructor(props) {
        super(props);

        this.state = { cliente: new Cliente(1, "Pedro", "Picapiedra", "+56919384728", "yahuuu@YAHOO.COM", "Lunes 13:00 hrs.") };
    }

    render() {
        const { cliente } = this.state;

        return (
            <div>
                <h3>Datos del cliente</h3>
                <p>{cliente}</p>
            </div>
        );
    }
}

export default ComponenteCliente;
