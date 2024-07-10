import React, { useEffect, useState } from "react";

function MostrarEmpleado() {
    const [empleado, setEmpleado] = useState(null);

    useEffect(() => {
        const getData = () => {
            return JSON.parse(localStorage.getItem('empleado'));
        };

        const empleadoGuardado = getData();

        if (empleadoGuardado) {
            setEmpleado(empleadoGuardado);
        }
    }, []);

    const mostrarEmpleado = () => {
        if (empleado) {
            return (
                <div>
                    <h4>Empleado</h4>
                    <p>Rut: {empleado.rut}</p>
                    <p>Nombre: {empleado.nombre}</p>
                    <p>Apellido: {empleado.apellido}</p>
                    <p>Puesto: {empleado.puesto}</p>
                    <p>Sueldo: {empleado.sueldo}</p>
                    <p>Horario: {empleado.horario}</p>
                </div>
            );
        } else {
            return (
                <p>No hay empleado guardado</p>
            );
        }
    };

    return (
        <div>
            {mostrarEmpleado()}
        </div>
    );
}

export default MostrarEmpleado;
