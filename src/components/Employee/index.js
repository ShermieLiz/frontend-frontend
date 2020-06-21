import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './index.css';

const Employee = () => {
    return (
        <React.Fragment>

            <div className="plusbutton">
                <Link to="/NewEmployee">
                    <Button className="insidebuttona" variant="secondary">+</Button>
                </Link>
            </div>

            <h4 className="texthome">Empleados actuales</h4>
            <h4 className="texthome">Estos son los datos encontrados hasta el momento, si quieres agregar
            más empelados presiona el boton de más que se encuentra en la parte superior izquierda.</h4>

            <div className="cardmargin">
                <Card className="text-center">
                    <Card.Header className="navfoot">Empleados actuales</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>

                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>e-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Alba</td>
                                        <td>Jofre</td>
                                        <td>albaofre@yahoo.com</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Manuel</td>
                                        <td>Paz</td>
                                        <td>mghydlke@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Sher</td>
                                        <td>Muñoz</td>
                                        <td>sherlizet@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>


                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted navfoot"></Card.Footer>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default Employee;
