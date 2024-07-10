import logo from './img/nombre-para-barberia.jpg';
import './App.css';
// import CrudGeneral from './Components/CrudGeneral';
import CrudEmpleado from './Components/CrudEmpleado';
// import CrudEmpleado from './Components/CrudEmpleado';
// import CrudCliente from './Components/CrudCliente';
// import CrudDetalle from './Components/CrudDetalle';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App container text-center">
      <div className='row'>
        <div className='col'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <CrudEmpleado />
      {/* <CrudEmpleado /> */}
      {/* <hr></hr> */}
      {/* <CrudCliente /> */}
      {/* <hr></hr> */}
      {/* <CrudDetalle /> */}
    </div>
  );
}

export default App;
