import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    CardBody,
} from 'reactstrap';
import './index.css';



const NewEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const handleInput = (e) => {
        switch (e.target.name) {
            case "inputfirstName":
                setFirstName(e.target.value)
                break;
            case "inputlastName":
                setLastName(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonSend = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
        }
        console.log(jsonSend);
        // Hacer una peticion POST al backend para registrar un usuario
        try {
            await axios.post('https://dirapplication.herokuapp.com/api/v1/register-user', jsonSend);
            alert('Successful register');
            history.push ("/Employee");
        } catch (error) {
            alert('Error');
        }

    }


return (
    <React.Fragment>
        <CardBody className="p-3 mb-2 bg-dark text-white rounded">
            <h1 className="titulo h4 text-center mb-4">Registra a los empleados</h1>
            <Form className="form" onSubmit={handleSubmit}>
                <FormGroup className="FormGroup">
                    <Label>Name</Label>
                    <Input className="rounded-pill bg-dark text-white"
                        type="text"
                        id="firstName"
                        name="inputfirstName"
                        placeholder="Nombre"
                        value={firstName}
                        onChange={handleInput} />
                </FormGroup>
                <FormGroup className="FormGroup">
                    <Label>Apellido</Label>
                    <Input className="rounded-pill bg-dark text-white"
                        type="text"
                        id="lastName"
                        name="inputlastName"
                        placeholder="Apellido"
                        value={lastName}
                        onChange={handleInput} />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        className="rounded-pill bg-dark text-white"
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Email de contacto"
                        value={email}
                        onChange={handleInput} />
                </FormGroup>
                <FormGroup>
                    <Label>Contraseña</Label>
                    <Input className="rounded-pill bg-dark text-white"
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Contraseña segura*"
                        value={password}
                        onChange={handleInput} />
                </FormGroup>

                <Button className="mt-4 d-flex align-item-center p-3 mx-auto rounded-pill" color="primary" type="submit">Registrar</Button>
            </Form>
        </CardBody >
    </React.Fragment>
);
}
export default NewEmployee;


/* return (
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
                            </Form.Row>
                            <Form.Group as={Col} controlId="formGridemail">
                                <Form.Label>e-mail</Form.Label>
                                <Form.Control placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGridPuesto">
                                <Form.Label>Workspace</Form.Label>
                                <Form.Control placeholder="Puesto" />
                            </Form.Group>
                            <Form.Row className="formcenter">
                                <Form.Group as={Col} controlId="formGridAntiguedad">
                                    <Form.Label>Antiguedad</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group controlId="formGridContrato">
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
    </React.Fragment> */


