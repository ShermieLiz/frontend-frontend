import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './index.css';

const Employee = () => {
    return (
        <React.Fragment>
​
            <div className="plusbutton">
            <Link to="/NewEmployee">
                <Button className="insidebuttona" variant="secondary">+</Button>
            </Link>
            </div>
​
            <h4 className="texthome">Empleados actuales</h4>
            <h4 className="texthome">Estos son los datos encontrados hasta el momento, si quieres agregar
            más empelados presiona el boton de más que se encuentra en la parte superior izquierda.</h4>
​
            <div className="cardmargin">
                <Card className="text-center">
                    <Card.Header className="navfoot">Empleados actuales</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
​
​
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted navfoot"></Card.Footer>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default Employee;
        