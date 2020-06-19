import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './index.css';
const Principal = () => {
  return (
    <React.Fragment>
      <h4 className="texthome">Escoge cual de los siguientes perfiles quieres usar:</h4>
      <div className="buttoncenter">
        <Link to="/Employee">
          <Button variant="secondary">Empleados</Button>
        </Link>

        <Button variant="secondary">Proveedores</Button>
        <Button variant="secondary">Clientes</Button>
        <Button variant="secondary">Productos finales</Button>
      </div>
    </React.Fragment>
  );
}
export default Principal;