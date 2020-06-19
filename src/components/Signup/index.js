import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
  CardBody,
} from 'reactstrap'; 
import './index.css';


  const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [adress, setAdress] = useState('');

  const handleInput = (e) => {
    switch (e.target.name) {
      case "inputName":
        setName(e.target.value)
        break;
        case "email":
        setEmail(e.target.value)
        break;
        case "password":
        setPassword(e.target.value)
        break;
        case "phoneNumber":
        setPhoneNumber(e.target.value)
        break;
        case "adress":
        setAdress(e.target.value)
        break;
            }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {
      name: name,
      email: email,
      password: password,
      phone_number: phoneNumber,
      adress: adress,
    }
    console.log(jsonSend);
    // Hacer una peticion POST al backend para registrar un usuario
    try {
      await axios.post('https://dirapplication.herokuapp.com/api/v1/register', jsonSend);
      alert('Successful signup');
    } catch (error) {
      alert('Error');
    }
    
  }

  return (
    <React.Fragment>
      <CardBody className="p-3 mb-2 bg-dark text-white rounded">
      <h1 className="titulo h4 text-center mb-4">Registra tu empresa</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup className="FormGroup">
          <Label>Name</Label>
          <Input  className="rounded-pill bg-dark text-white"
            type="text"
            id="Name"
            name="inputName" 
            placeholder="Razón social"
            value={name}
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
          <Label>Password</Label>
          <Input className="rounded-pill bg-dark text-white" 
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Contraseña segura*" 
            value={password}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Numero de celular</Label>
          <Input
          className="rounded-pill bg-dark text-white"
            type="Number" 
            name="phoneNumber" 
            id="inputphoneNumber" 
            placeholder="teléfono o celurar de tu empresa"
            value={phoneNumber}
            onChange={handleInput}
            />
        </FormGroup>
        <FormGroup>
          <Label>Dirección</Label>
          <Input
          className="rounded-pill bg-dark text-white"
            type="text" 
            name="adress" 
            id="inputadress" 
            placeholder="Dirección incluyendo ciudad y país"
            value={adress}
            onChange={handleInput}
            />
        </FormGroup>
        <Button className="mt-4 d-flex align-item-center p-3 mx-auto rounded-pill" color="primary" type="submit">Registrar</Button>
      </Form>
      </CardBody >
    </React.Fragment>
  );
}
 
export default Signup; 