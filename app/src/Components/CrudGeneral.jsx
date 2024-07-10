import React from "react";
import Empleado from "../Class/Empleado";
import Cliente from "../Class/Cliente";
import Detalle from "../Class/Detalle";
import '../components.css';

function CrudGeneral() {
    let empleados = [];
    empleados.push(new Empleado("15-5", "Aitor", "Tilla", "Barbero", 480000, "10:00 a 18:00"));

    function addEmpleado() {
        let rut = document.getElementById("e-rut").value;
        let nom = document.getElementById("e-nom").value;
        let ape = document.getElementById("e-ape").value;
        let pue = document.getElementById("e-pue").value;
        let sue = parseInt(document.getElementById("e-sue").value);
        let hor = document.getElementById("e-hor").value;

        if (rut === "" || nom === "" || ape === "" || pue === "" || isNaN(sue) || hor === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            let v = empleados.some(emp => emp.getRut === rut);
            if (v) {
                alert("Ya existe un empleado con este rut. Por favor, escriba otro rut.");
            } else {
                let e = new Empleado(rut, nom, ape, pue, sue, hor);
                empleados.push(e);
                alert("Empleado agregado exitosamente ✔️");
            }
        }
    }

    function editEmpleado() {
        let r = document.getElementById("e-eRut").value;
        if (r !== "") {
            let e = empleados.find(em => em.getRut === r);
            if (e != undefined) {
                alert("Empleado encontrado ");
                let nom = document.getElementById("e-eNom").value;
                let ape = document.getElementById("e-eApe").value;
                let pue = document.getElementById("e-ePue").value;
                let sue = parseInt(document.getElementById("e-eSue").value);
                let hor = document.getElementById("e-eHor").value;

                if (nom === "" && ape === "" && pue === "" && isNaN(sue) && hor === "") {
                    alert("Por favor, complete al menos un campo para editar.");
                } else {
                    if (nom != "") {
                        e.setNombre(nom);
                    }
                    if (ape != "") {
                        e.setApellido(ape);
                    }
                    if (pue != "") {
                        e.setPuesto(pue);
                    }
                    if (!isNaN(sue)) {
                        e.setSueldo(sue)
                    }
                    if (hor != "") {
                        e.setHorario(hor);
                    }
                    alert("Editado correctamente")
                }
            } else {
                alert("Empleado no encontrado 😕");
            }
        } else {
            alert("Por favor, ingrese un rut.");
        }
    }

    function findEmpleado() {
        let r = document.getElementById("b-rut").value;
        if (r === "") {
            alert("El campo no puede estar vacío.");
            return;
        }
        let e = empleados.find(emp => emp.getRut === r);

        if (e != undefined) {

            alert("Empleado encontrado 👍");
            document.getElementById("r-rut").innerHTML = "<b>Rut: </b>" + e.getRut;
            document.getElementById("r-nom").innerHTML = "<b>Nombre: </b>" + e.getNombre + " <b>Apellido: </b>" + e.getApellido;
            document.getElementById("r-pue").innerHTML = "<b>Puesto: </b>" + e.getPuesto;
            document.getElementById("r-sue").innerHTML = "<b>Sueldo: </b>" + e.getSueldo;
            document.getElementById("r-hor").innerHTML = "<b>Horario: </b>" + e.getHorario;
        } else {
            alert("Empleado no encontrado 😕");
        }
    }

    function deleteEmpleado() {
        let r = document.getElementById("e-dRut").value;
        if (r === "") {
            alert("El campo no puede estar vacío.");
            return;
        }
        let i = empleados.findIndex(emp => emp.getRut === r);

        if (i !== -1) {
            empleados.splice(i, 1);
            alert("Empleado eliminado exitosamente ✔️ ");
            console.log(empleados);
        } else {
            alert("Empleado no encontrado");
        }
    }

    function listarEmpleado() {
        let tabla = document.createElement("table")

        let head = document.createElement("thead");
        let headRow = document.createElement("tr");
        let headNames = ["Rut del empleado", "Nombre", "Apellido", "Puesto", "Sueldo", "Horario"];

        headNames.forEach(nam => {
            let th = document.createElement("th");
            th.textContent = nam;
            headRow.appendChild(th);
        });

        head.appendChild(headRow);
        tabla.appendChild(head);

        empleados.forEach(emp => {
            let row = document.createElement("tr");

            let rut = document.createElement("td");
            rut.textContent = emp._rut;
            row.appendChild(rut);

            let nom = document.createElement("td");
            nom.textContent = emp._nombre;
            row.appendChild(nom);

            let ape = document.createElement("td");
            ape.textContent = emp._apellido;
            row.appendChild(ape);

            let pue = document.createElement("td");
            pue.textContent = emp._puesto;
            row.appendChild(pue);

            let sue = document.createElement("td");
            sue.textContent = emp._sueldo;
            row.appendChild(sue);

            let hor = document.createElement("td");
            hor.textContent = emp._horario;
            row.appendChild(hor);

            tabla.appendChild(row);
        });

        document.getElementById("tablaEmpleado").innerHTML = "";
        document.getElementById("tablaEmpleado").appendChild(tabla);
    }

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
    let detalles = [];
    let empleado = empleados.find(i => i._rut == "15-5");
    let cliente = clientes.find(i => i._idCli == 1);

    detalles.push(new Detalle("A1", "un corte de pelo", "2024-05-23", 10000, empleado, cliente));

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
            <div className="row Add">
                <div className="col">
                    <h3>Añadir empleado👍</h3>
                    <form className="d-flex flex-row">
                        <input className="form-control" id="e-rut" type="text" placeholder="Rut del empleado"></input>
                        <input className="form-control" id="e-nom" type="text" placeholder="Nombre"></input>
                        <input className="form-control" id="e-ape" type="text" placeholder="Apellido"></input>
                        <input className="form-control" id="e-pue" type="text" placeholder="Puesto"></input>
                        <input className="form-control" id="e-sue" type="number" placeholder="Sueldo"></input>
                        <input className="form-control" id="e-hor" type="text" placeholder="Horario"></input>
                        <input type="button" className="btn btn-primary" value="Añadir" onClick={addEmpleado} />
                    </form>
                </div>
            </div>
            <div className="row Edit">
                <div className="col">
                    <hr />
                    <h3>Editar empleado👌</h3>
                    <form className="flex-row">
                        <input className="form-control" id="e-eRut" type="text" placeholder="Rut del empleado"></input>
                        <input className="form-control" id="e-eNom" type="text" placeholder="Nombre"></input>
                        <input className="form-control" id="e-eApe" type="text" placeholder="Apellido"></input>
                        <input className="form-control" id="e-ePue" type="text" placeholder="Puesto"></input>
                        <input className="form-control" id="e-eSue" type="number" placeholder="Sueldo"></input>
                        <input className="form-control" id="e-eHor" type="text" placeholder="Horario"></input>
                        <input type="button" className="btn btn-primary" value="Editar" onClick={editEmpleado} />
                    </form>
                </div>
                <div className="col">
                    <hr />
                    <h3>Buscar empleado🕵️</h3>
                    <form className="d-flex flex-row">
                        <input className="form-control" id="b-rut" type="text" placeholder="Rut del empleado"></input>
                        <input type="button" className="btn btn-primary" value="Buscar" onClick={findEmpleado} />
                    </form>
                    <span id="r-rut"></span><br />
                    <span id="r-nom"></span><br />
                    <span id="r-pue"></span><br />
                    <span id="r-sue"></span><br />
                    <span id="r-hor"></span><br />
                </div>
                <div className="col">
                    <hr />
                    <h3>Eliminar empleado✖️</h3>
                    <form className="d-flex flex-row">
                        <input className="form-control" id="e-dRut" type="text" placeholder="Rut del empleado"></input>
                        <input type="button" className="btn btn-primary" value="Eliminar" onClick={deleteEmpleado} />
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="button" value="Listar" className="btn btn-primary" onClick={listarEmpleado} />
                    <div id="tablaEmpleado" className="table"></div>
                </div>
            </div>
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

export default CrudGeneral;
