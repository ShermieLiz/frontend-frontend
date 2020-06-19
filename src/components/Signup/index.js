import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
  CardBody,
  CardImg
} from 'reactstrap'; 
import './index.css';


  const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    switch (e.target.name) {
      case "inputFirstName":
        setFirstName(e.target.value)
        break;
      case "lastName":
        setLastName(e.target.value)
        break;
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break;
      default:
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
    // Hacer una peticion POST al backend para registrar un usuario
    try {
      await axios.post('https://dir-app.herokuapp.com/', jsonSend);
      alert('Successful signup');
    } catch (error) {
      alert('Error');
    }
    
  }

  return (
    <React.Fragment>
      <CardBody className="p-3 mb-2 bg-dark text-white rounded">
      <h1 className="titulo" className="h4 text-center mb-4">Registra tu empresa</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup className="FormGroup">
          <Label>First Name</Label>
          <Input  className="rounded-pill bg-dark text-white"
            type="text"
            id="firstName"
            name="inputFirstName" 
            placeholder="type your first name"
            value={firstName}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
          className="rounded-pill bg-dark text-white"
            type="text" 
            name="lastName" 
            id="inputLastname" 
            placeholder="type your last name"
            value={lastName}
            onChange={handleInput}
            ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
          className="rounded-pill bg-dark text-white"
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email"
            value={email}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input className="rounded-pill bg-dark text-white" 
            type="password"
            name="password"
            id="examplePassword"
            placeholder="type your password here" 
            value={password}
            onChange={handleInput} />
        </FormGroup>
        <Button className="mt-4 d-flex align-item-center p-3 mx-auto rounded-pill" color="primary" type="submit" pill>Registrar</Button>
      </Form>
      </CardBody >
    </React.Fragment>
  );
}
 
export default Signup; 