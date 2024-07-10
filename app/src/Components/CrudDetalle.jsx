import React from "react";
import Detalle from "../Class/Detalle";
import empleados from "./CrudEmpleado";
import clientes from "./CrudCliente"
import '../components.css';

function CrudDetalle() {
    let detalles = [];
    let empleado = empleados.find(i => i._rut == "15-5");
    let cliente = clientes.find(i => i._idCli == 1);
    
    // detalles.push(new Detalle("A1", "un corte de pelo", "2024-05-23", 10000, empleado, cliente));

    function addDetalle() {
        let idD = document.getElementById("d-idD").value;
        let des = document.getElementById("d-des").value;
        let fec = document.getElementById("d-fec").value;
        let cos = parseInt(document.getElementById("d-cos").value);
        let emp = document.getElementById("d-emp").value;
        let cli = parseInt(document.getElementById("d-cli").value);

        if (idD === "" || des === "" || fec === "" || isNaN(cos) || emp === "" || isNaN(cli)) {
            alert("Por favor, complete todos los campos.");
        } else {
            let v = detalles.some(det => det.getIdDet === idD);
            if (v) {
                alert("Ya existe un detalle con este ID. Por favor, escriba otro ID.");
            } else {
                let empleado = empleados.find(em => em.getRut === emp);
                let cliente = clientes.find(cl => cl.getIdCli === cli);
                if (empleado === undefined && cliente === undefined) {
                    alert("RUT del empleado e ID del cliente no válidos");
                } else if (empleado === undefined) {
                    alert("RUT del empleado no válido");
                } else if (cliente === undefined) {
                    alert("ID del cliente no válido");
                } else {
                    let d = new Detalle(idD, des, fec, cos, empleado, cliente);
                    detalles.push(d);
                    alert("Detalle agregado exitosamente ✔️");
                    console.log(detalles);
                }
            }
        }
    }

    function editDetalle() {
        let i = document.getElementById("d-eIdD").value;
        if (i === "") {
            alert("Por favor, complete el campo de ID del detalle.");
        } else {
            let d = detalles.find(det => det.getIdDet === i);

            if (d !== undefined) {
                alert("Detalle encontrado");
                let des = document.getElementById("d-eDes").value;
                let fec = document.getElementById("d-eFec").value;
                let cos = parseInt(document.getElementById("d-eCos").value);
                let emp = document.getElementById("d-eEmp").value;
                let cli = parseInt(document.getElementById("d-eCli").value);

                if (des === "" && fec === "" && isNaN(cos) && emp === "" && isNaN(cli)) {
                    alert("Por favor, complete al menos un campo para editar.");
                } else {
                    if (des !== "") {
                        d.setDescripcion(des);
                    }
                    if (fec !== "") {
                        d.setFecha(fec);
                    }
                    if (!isNaN(cos)) {
                        d.setCosto(cos);
                    }
                    if (emp !== "") {
                        let empleado = empleados.find(em => em.getRut === emp);
                        if (empleado !== undefined) {
                            d.setEmpleado(empleado);
                        } else {
                            alert("El empleado no existe.");
                        }
                    }
                    if (!isNaN(cli)) {
                        let cliente = clientes.find(cl => cl.getIdCli === cli);
                        if (cliente !== undefined) {
                            d.setCliente(cliente);
                        } else {
                            alert("El cliente no existe.");
                        }
                    }
                    alert("Editado exitosamente.");
                }
            } else {
                alert("Detalle no encontrado 😕");
            }
        }
    }

    function findDetalle() {
        let i = document.getElementById("b-dIdD").value;

        if (i === "") {
            alert("El campo ID del detalle no puede estar vacío.");
            return;
        }

        let d = detalles.find(det => det.getIdDet === i);

        if (d != undefined) {
            alert("Detalle encontrado");
            document.getElementById("r-dIdC").innerHTML = "<b>Id detalle: </b>" + d.getIdDet + "<br>";
            document.getElementById("r-dDes").innerHTML = "<b>Descripción detalle: </b>" + d.getDescripcion + "<br>";
            document.getElementById("r-dFec").innerHTML = "<b>Fecha detalle: </b>" + d.getFecha + "<br>";
            document.getElementById("r-dCos").innerHTML = "<b>Costo detalle: </b>" + d.getCosto + "<br>";
            document.getElementById("r-dEmp").innerHTML = "<b>Id del empleado designado: </b>" + d.getEmpleado.getRut + " <br><b>Nombre: </b>" + d.getEmpleado.getNombre + " <b>Apellido: </b>" + d.getEmpleado.getApellido + "<br>";
            document.getElementById("r-dCli").innerHTML = "<b>Id del cliente designado: </b>" + d.getCliente.getIdCli + " <br><b>Nombre: </b>" + d.getCliente.getNombre + " <b>Apellido: </b>" + d.getCliente.getApellido + "<br>";
        } else {
            alert("Detalle no encontrado");
        }
    }

    function deleteDetalle() {
        let d = document.getElementById("d-dIdD").value;
        if (d === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            let i = detalles.findIndex(det => det.getIdDet === d);

            if (i !== -1) {
                detalles.splice(i, 1);
                alert("Detalle eliminado exitosamente ✔️ ");
                console.log(detalles);
            } else {
                alert("Detalle no encontrado");
            }
        }
    }

    function listarDetalle() {
        let tabla = document.createElement("table")

        let head = document.createElement("thead");
        let headRow = document.createElement("tr");
        let headNames = ["Id del detalle", "Descripcion", "Fecha", "Costo", "Rut del empleado", "Id del cliente"];

        headNames.forEach(nam => {
            let th = document.createElement("th");
            th.textContent = nam;
            headRow.appendChild(th);
        });

        head.appendChild(headRow);
        tabla.appendChild(head);

        detalles.forEach(det => {
            let row = document.createElement("tr");

            let idD = document.createElement("td");
            idD.textContent = det._idDet;
            row.appendChild(idD);

            let des = document.createElement("td");
            des.textContent = det._descripcion;
            row.appendChild(des);

            let fec = document.createElement("td");
            fec.textContent = det._fecha;
            row.appendChild(fec);

            let cos = document.createElement("td");
            cos.textContent = det._costo;
            row.appendChild(cos);

            let emp = document.createElement("td");
            emp.textContent = det._empleado._rut;
            row.appendChild(emp);

            let idC = document.createElement("td");
            idC.textContent = det._cliente._idCli;
            row.appendChild(idC);

            tabla.appendChild(row);
        });

        document.getElementById("tablaDetalle").innerHTML = "";
        document.getElementById("tablaDetalle").appendChild(tabla);
    }

    return (
        <div className="container text-center">
            <div class="row">
                <div class="col Add">
                    <h3>Añadir detalle👍</h3>
                    <form className="d-flex flex-row">
                        <input className="form-control" id="d-idD" type="text" placeholder="Id del detalle"></input>
                        <input className="form-control" id="d-des" type="text" placeholder="Descripción"></input>
                        <input className="form-control" id="d-fec" type="date" placeholder="Fecha"></input>
                        <input className="form-control" id="d-cos" type="text" placeholder="Costo"></input>
                        <input className="form-control" id="d-emp" type="text" placeholder="Rut del empleado"></input>
                        <input className="form-control" id="d-cli" type="number" placeholder="Id del cliente"></input>
                        <input type="button" className="btn btn-primary" value="Añadir" onClick={addDetalle} />
                    </form>
                </div>
            </div>
            <div className="row Edit">
                <div className="col">
                    <h3>Editar detalle👌</h3>
                    <form className="flex-row">
                        <input className="form-control" id="d-eidD" type="text" placeholder="Id del detalle"></input>
                        <input className="form-control" id="d-eDes" type="text" placeholder="Descripción"></input>
                        <input className="form-control" id="d-eFec" type="date" placeholder="Fecha"></input>
                        <input className="form-control" id="d-eCos" type="text" placeholder="Costo"></input>
                        <input className="form-control" id="d-eEmp" type="text" placeholder="Rut del empleado"></input>
                        <input className="form-control" id="d-eCli" type="number" placeholder="Id del cliente"></input>
                        <input type="button" className="btn btn-primary" value="Editar" onClick={editDetalle} />
                    </form>
                </div>
                <div className="col">
                    <h3>Buscar detalle🕵️</h3>
                    <form className="d-flex flex-row">
                        <input className="form-control" id="b-dIdD" type="text" placeholder="Id del detalle"></input>
                        <input type="button" className="btn btn-primary" value="Buscar" onClick={findDetalle} />
                    </form>
                    <span id="r-dIdC"></span><br />
                    <span id="r-dDes"></span><br />
                    <span id="r-dFec"></span><br />
                    <span id="r-dCos"></span><br />
                    <span id="r-dEmp"></span><br />
                    <span id="r-dCli"></span><br />
                </div>
                <div className="col">
                    <h3>Eliminar detalle✖️</h3>
                    <form className="d-flex flex-row">
                        <input className="form-control" id="d-dIdD" type="text" placeholder="Id del detalle"></input>
                        <input type="button" className="btn btn-primary" value="Eliminar" onClick={deleteDetalle} />
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="button" value="Listar" className="btn btn-primary" onClick={listarDetalle} />
                    <div id="tablaDetalle" className="table"></div>
                </div>
            </div>
        </div>
    )

}

export default CrudDetalle;
