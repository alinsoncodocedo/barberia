import React from "react";
import Cliente from "../Class/Cliente";
import '../components.css';

function CrudCliente() {
    let clientes = [];
    clientes.push(new Cliente(1, "Pedro", "Picapiedra", "+56919384728", "yahuuu@YAHOO.COM", "Lunes 13:00 hrs."));

    function addCliente() {
        let idC = parseInt(document.getElementById("c-idC").value);
        let nom = document.getElementById("c-nom").value;
        let ape = document.getElementById("c-ape").value;
        let tel = document.getElementById("c-tel").value;
        let cor = document.getElementById("c-cor").value;
        let res = document.getElementById("c-res").value;

        if (isNaN(idC) || nom === "" || ape === "" || tel === "" || cor === "" || res === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            // Verificar si el ID ya existe
            let v = clientes.some(cli => cli.getIdCli === idC);
            if (v) {
                alert("Ya existe un cliente con este Id. Por favor, escriba otro Id.");
            } else {
                let c = new Cliente(idC, nom, ape, tel, cor, res);
                clientes.push(c);
                alert("Cliente agregado exitosamente ✔");
                console.log(clientes);
            }
        }
    }

    function editCliente() {
        let i = parseInt(document.getElementById("c-eIdC").value);
        if (isNaN(i)) {
            alert("Por favor, complete todos los campos.");
        } else {
            let c = clientes.find(cl => cl.getIdCli === i);

            if (c != undefined) {
                alert("Cliente encontrado");
                let nom = document.getElementById("c-eNom").value;
                let ape = document.getElementById("c-eApe").value;
                let tel = document.getElementById("c-eTel").value;
                let cor = document.getElementById("c-eCor").value;
                let res = document.getElementById("c-eRes").value;

                if (nom === "" && ape === "" && tel === "" && cor === "" && res === "") {
                    alert("Por favor, complete al menos un campo para editar.");
                } else {
                    if (nom != "") {
                        c.setNombre(nom);
                    }
                    if (ape != "") {
                        c.setApellido(ape);
                    }
                    if (tel != "") {
                        c.setTelefono(tel);
                    }
                    if (cor != "") {
                        c.setCorreo(cor)
                    }
                    if (res != "") {
                        c.setReservacion(res);
                    }
                    alert("Editado existosamente")
                }
            } else {
                alert("Cliente no encontrado 😕");
            }
        }
    }

    function findCliente() {
        let i = parseInt(document.getElementById("b-idC").value);
        if (isNaN(i)) {
            alert("El campo no puede estar vacío.");
        } else {
            let c = clientes.find(cli => cli.getIdCli === i);
            if (c != undefined) {
                alert("Cliente encontrado 👍");
                document.getElementById("r-cIdC").innerHTML = "<b>Id cliente: </b>" + c.getIdCli;
                document.getElementById("r-cNom").innerHTML = "<b>Nombre: </b>" + c.getNombre + " <b>Apellido: </b>" + c.getApellido;
                document.getElementById("r-cTel").innerHTML = "<b>Telefono: </b>" + c.getTelefono;
                document.getElementById("r-cCor").innerHTML = "<b>Correo: </b>" + c.getCorreo;
                document.getElementById("r-cRes").innerHTML = "<b>Reservacion: </b>" + c.getReservacion;
            } else {
                alert("Cliente no encontrado 😕");
            }
        }
    }

    function deleteCliente() {
        let id = parseInt(document.getElementById("c-dIdC").value);
        if (isNaN(id)) {
            alert("El campo no puede estar vacío.");
        } else {
            let i = clientes.findIndex(cli => cli.getIdCli === id);

            if (i !== -1) {
                clientes.splice(i, 1);
                alert("Cliente eliminado exitosamente ✔️ ");
                console.log(clientes);
            } else {
                alert("Cliente no encontrado");
            }
        }
    }

    function listarCliente() {
        let tabla = document.createElement("table")

        let head = document.createElement("thead");
        let headRow = document.createElement("tr");
        let headNames = ["Id del cliente", "Nombre", "Apellido", "Telefono", "Correo", "Reservacion"];

        headNames.forEach(nam => {
            let th = document.createElement("th");
            th.textContent = nam;
            headRow.appendChild(th);
        });

        head.appendChild(headRow);
        tabla.appendChild(head);

        clientes.forEach(cli => {
            let row = document.createElement("tr");

            let idC = document.createElement("td");
            idC.textContent = cli._idCli;
            row.appendChild(idC);

            let nom = document.createElement("td");
            nom.textContent = cli._nombre;
            row.appendChild(nom);

            let ape = document.createElement("td");
            ape.textContent = cli._apellido;
            row.appendChild(ape);

            let tel = document.createElement("td");
            tel.textContent = cli._telefono;
            row.appendChild(tel);

            let cor = document.createElement("td");
            cor.textContent = cli._correo;
            row.appendChild(cor);

            let res = document.createElement("td");
            res.textContent = cli._reservacion;
            row.appendChild(res);

            tabla.appendChild(row);
        });

        document.getElementById("tablaCliente").innerHTML = "";
        document.getElementById("tablaCliente").appendChild(tabla);
    }

    return (
        <div className="container text-center">
            <div className="row Add">
                <div className="col">
                    <h3>Añadir Cliente👍</h3>
                    <form className="d-flex flex-row">
                        <input className="form-control" id="c-idC" type="number" placeholder="Id del cliente"></input>
                        <input className="form-control" id="c-nom" type="text" placeholder="Nombre"></input>
                        <input className="form-control" id="c-ape" type="text" placeholder="Apellido"></input>
                        <input className="form-control" id="c-tel" type="text" placeholder="Telefono"></input>
                        <input className="form-control" id="c-cor" type="text" placeholder="Correo"></input>
                        <input className="form-control" id="c-res" type="text" placeholder="Reservacion"></input>
                        <input type="button" class="btn btn-primary" value="Añadir" onClick={addCliente} />
                    </form>
                </div>
            </div>
            <div className="row Edit">
                <div className="col">
                    <h3>Editar cliente👌</h3>
                    <form className="flex-row">
                        <input className="form-control" id="c-eIdC" type="number" placeholder="Id del cliente"></input>
                        <input className="form-control" id="c-eNom" type="text" placeholder="Nombre"></input>
                        <input className="form-control" id="c-eApe" type="text" placeholder="Apellido"></input>
                        <input className="form-control" id="c-eTel" type="text" placeholder="Telefono"></input>
                        <input className="form-control" id="c-eCor" type="text" placeholder="Correo"></input>
                        <input className="form-control" id="c-eRes" type="text" placeholder="Reservacion"></input>
                        <input type="button" className="btn btn-primary" value="Editar" onClick={editCliente} />
                    </form>
                </div>
                <div className="col">
                    <h3>Buscar cliente🕵️</h3>
                    <form className="d-flex flex-row">
                        <input className="form-control" id="b-idC" type="number" placeholder="Id del cliente"></input>
                        <input type="button" className="btn btn-primary" value="Buscar" onClick={findCliente} />
                    </form>
                    <span id="r-cIdC"></span><br />
                    <span id="r-cNom"></span><br />
                    <span id="r-cTel"></span><br />
                    <span id="r-cCor"></span><br />
                    <span id="r-cRes"></span><br />
                </div>
                <div className="col">
                    <h3>Eliminar cliente✖️</h3>
                    <form className="d-flex flex-row">
                        <input className="form-control" id="c-dIdC" type="number" placeholder="Id del cliente"></input>
                        <input type="button" className="btn btn-primary" value="Eliminar" onClick={deleteCliente} />
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="button" value="Listar" className="btn btn-primary" onClick={listarCliente} />
                    <div id="tablaCliente" className="table"></div>
                </div>
            </div>
        </div>

    );
}

export default CrudCliente;
