import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './index.css';
const NewEmployee = () => {
    return (
        <React.Fragment>
            <h4 className="texthome">Nuevos empleados</h4>
            <h4 className="texthome">Rellena el formulario para considerar la información como ingresada.</h4>
            <div className="cardmargin">
                <Card className="text-center">
                    <Card.Header className="navfoot">Empleado nuevo</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Row className="formcenter">
                                    <Form.Group as={Col} controlId="validationNombres">
                                        <Form.Label>Nombres</Form.Label>
                                        <Form.Control type="text" placeholder="Nombres" required />
                                    </Form.Group>
                                        <Form.Group as={Col} controlId="formGridAPaterno">
                                        <Form.Label>Apellido Paterno</Form.Label>
                                        <Form.Control type="" placeholder="Apellido Paterno" />
                                    </Form.Group>
                                        <Form.Group as={Col} controlId="formGridAMaterno">
                                        <Form.Label>Apellido Materno</Form.Label>
                                        <Form.Control type="" placeholder="Apellido Materno" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridRfc">
                                        <Form.Label>RFC</Form.Label>
                                        <Form.Control type="" placeholder="RFC" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group as={Col} controlId="formGriddireccion">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control placeholder="Calle 1234" />
                                </Form.Group>
                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Puesto</Form.Label>
                                    <Form.Control placeholder="Puesto" />
                                </Form.Group>
                                <Form.Row className="formcenter">
                                    <Form.Group as={Col} controlId="formGridAntiguedad">
                                        <Form.Label>Antiguedad</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                    <Form.Group  controlId="formGridContrato">
                                        <Form.Label>Contrato</Form.Label>
                                        <Form.Control as="select" defaultValue="Seleccionar...">
                                            <option>Tiempo completo</option>
                                            <option>Medio tiempo</option>
                                            <option>Eventual</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridSalario">
                                        <Form.Label>Salario</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Card.Text>
                        <div className="summitbutton">
                        <Link to="/Employee">
                        <Button className="insidebutton" variant="secondary">Ingresar información</Button>
                        </Link>
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-muted navfoot"></Card.Footer>
                </Card>
            </div>
        </React.Fragment>
    );
}
export default NewEmployee;