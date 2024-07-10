// import React, { useState } from "react";
// import Empleado from "../Class/Empleado";
// import '../components.css';
// import MostrarEmpleado from "./MostrarEmpleado";

// function CrudEmpleado() {

//     const [inputText, setInputText] = useState({
//         rut: '',
//         nombre: '',
//         apellido: '',
//         puesto: '',
//         sueldo: '',
//         horario: ''
//     });
//     const [savedData, setSavedData] = useState(false);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setInputText({
//             ...inputText,
//             [name]: value
//         });
//     }

//     const saveData = () => {
//         const { rut, nombre, apellido, puesto, sueldo, horario } = inputText;

//         const empleado = new Empleado(rut, nombre, apellido, puesto, sueldo, horario);

//         localStorage.setItem('empleado', JSON.stringify(empleado));
//         alert('Guardado');
//         setSavedData(true);
//     }

//     const buscarEmpleado = () => {
//         const empleadoGuardado = JSON.parse(localStorage.getItem('empleado'));

//         if (empleadoGuardado && empleadoGuardado.rut === inputText.rut) {
//             setEmpleadoEncontrado(empleadoGuardado);
//         } else {
//             setEmpleadoEncontrado(null);
//             alert('Empleado no encontrado');
//         }
//     }

//     return (
//         <div className="container text-center">
//             <div className="row ">
//                 <div className="col">
//                     <h4>Añadir empleado👍</h4>
//                     <form>
//                         <input type="text" className="form-control" name="rut" onChange={handleInputChange} placeholder="Rut del empleado" />
//                         <input type="text" className="form-control" name="nombre" onChange={handleInputChange} placeholder="Nombre" />
//                         <input type="text" className="form-control" name="apellido" onChange={handleInputChange} placeholder="Apellido" />
//                         <input type="text" className="form-control" name="puesto" onChange={handleInputChange} placeholder="Puesto" />
//                         <input type="number" className="form-control" name="sueldo" onChange={handleInputChange} placeholder="Sueldo" />
//                         <input type="text" className="form-control" name="horario" onChange={handleInputChange} placeholder="Horario" />
//                         <input type="button" value="Añadir" onClick={saveData} />
//                     </form>
//                     {(!!savedData) && <MostrarEmpleado />}
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col">
//                     <h4>Buscar empleado🕵️</h4>
//                     <form>
//                         <input type="text" className="form-control" name="rut" onChange={handleInputChange} placeholder="Rut del empleado" />
//                         <input type="button" value="Buscar" onClick={MostrarEmpleado} />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CrudEmpleado;

import React, { useState } from "react";
import Empleado from "../Class/Empleado";
import '../components.css';
import MostrarEmpleado from "./MostrarEmpleado";

function CrudEmpleado() {
    const [inputText, setInputText] = useState({
        rut: '',
        nombre: '',
        apellido: '',
        puesto: '',
        sueldo: '',
        horario: ''
    });
    const [empleadoEncontrado, setEmpleadoEncontrado] = useState(null);
    const [savedData, setSavedData] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputText({
            ...inputText,
            [name]: value
        });
    }

    const saveData = () => {
        const { rut, nombre, apellido, puesto, sueldo, horario } = inputText;

        const empleado = new Empleado(rut, nombre, apellido, puesto, sueldo, horario);

        localStorage.setItem('empleado', JSON.stringify(empleado));
        alert('Guardado');
        setSavedData(true);
        setEmpleadoEncontrado(null); // Limpiar empleado encontrado
    }

    const buscarEmpleado = () => {
        const empleadoGuardado = JSON.parse(localStorage.getItem('empleado'));

        if (empleadoGuardado && empleadoGuardado.rut === inputText.rut) {
            setEmpleadoEncontrado(empleadoGuardado);
        } else {
            setEmpleadoEncontrado(null);
            alert('Empleado no encontrado');
        }
    }

    return (
        <div className="container text-center">
            <div className="row ">
                <div className="col">
                    <h4>Añadir o buscar empleado</h4>
                    <form>
                        <input type="text" className="form-control" name="rut" onChange={handleInputChange} placeholder="Rut del empleado" />
                        <input type="text" className="form-control" name="nombre" onChange={handleInputChange} placeholder="Nombre" />
                        <input type="text" className="form-control" name="apellido" onChange={handleInputChange} placeholder="Apellido" />
                        <input type="text" className="form-control" name="puesto" onChange={handleInputChange} placeholder="Puesto" />
                        <input type="number" className="form-control" name="sueldo" onChange={handleInputChange} placeholder="Sueldo" />
                        <input type="text" className="form-control" name="horario" onChange={handleInputChange} placeholder="Horario" />
                        <div className="mt-3">
                            <input type="button" value="Añadir" onClick={saveData} className="btn btn-primary mr-2" />
                            <input type="button" value="Buscar" onClick={buscarEmpleado} className="btn btn-secondary" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {empleadoEncontrado && <MostrarEmpleado empleado={empleadoEncontrado} />}
                </div>
            </div>
        </div>
    );
}

export default CrudEmpleado;
