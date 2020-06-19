import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
  CardBody
} from 'reactstrap';

const Login = () => {
  const { setTokenInLocalStorage, isAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isAuth) return <Redirect to="/" />

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = { email, password };
    try {
      const axiosRes = await axios.post('https://cinta-negra-backend.herokuapp.com/api/v1/login', jsonSend);
      const { token } = axiosRes.data;
      setTokenInLocalStorage(token);
      alert('Successful login');
    } catch (error) {
      alert('Error on login');
    }
  };

  return (
    <React.Fragment>
      <CardBody className="p-3 mb-2 bg-dark text-white rounded">
      <h1 className="mb-4 text-center">Dirapp</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input className="rounded-pill bg-dark text-white"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="exampleEmail"
            placeholder="type your email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input 
          className="rounded-pill bg-dark text-white"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="examplePassword"
            placeholder="type your password here" />
        </FormGroup>
        <Button className="mt-4 d-flex align-item-center p-3 mx-auto rounded-pill" color="primary" type="submit" pill>Entrar</Button>
      </Form>
      </CardBody>
      <div class="d-flex justify-content-center mt-5">
      <a href="#" className="card-link text-white">Olvidaste tu contraseña?</a>
     <a href="#" className="card-link text-white">Registrate</a>
     </div>

    </React.Fragment>
  );
}
 
export default Login;
 