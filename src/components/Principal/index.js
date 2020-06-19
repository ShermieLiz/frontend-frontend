import React from 'react';
import Button from 'react-bootstrap/Button';
import './index.css';
const Principal = () => {
  return (
    <React.Fragment>
      <h4 className="texthome">Escoge cual de los siguientes perfiles quieres usar:</h4>
      <div className="buttoncenter">
        <Button variant="secondary">Empleados</Button>
        <Button variant="secondary">Proveedores</Button>
        <Button variant="secondary">Clientes</Button>
        <Button variant="secondary">Productos finales</Button>
      </div>
    </React.Fragment>
  );
}
export default Principal;