import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import {
 Collapse,
 Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
} from 'reactstrap';

const Navigation = () => {
 const { isAuth, user } = useContext(AuthContext);
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);

 const publicNavbar = () => {
   return (<Navbar
     className="navbar navbar-dark bg-primary"
     // style={{ backgroundColor: "black", color: "red" }}
     expand="md">
     <NavbarBrand tag={Link} to="/">Dirapp</NavbarBrand>
     <NavbarToggler onClick={toggle} />
     <Collapse isOpen={isOpen} navbar>
       <Nav className="mr-auto" navbar>
         <NavItem>
           <NavLink tag={Link} to="/login">Entrar</NavLink>
         </NavItem>
         <NavItem>
           <NavLink tag={Link} to="/signup">Registrar</NavLink>
         </NavItem>
       </Nav>
     </Collapse>
   </Navbar>)
 }

 const authNavbar = () => {
  return (<Navbar
    className="navbar navbar-dark bg-dark"
    // style={{ backgroundColor: "black", color: "red" }}
    expand="md">
    <NavbarBrand tag={Link} to="/">¡Hola {user.first_name}!</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/users">Usuarios</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/logout">Logout</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>)
}

 return (
   <React.Fragment>
     { isAuth ? authNavbar() : publicNavbar() }
   </React.Fragment>
 );
}

export default Navigation;