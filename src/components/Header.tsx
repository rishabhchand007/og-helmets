import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand> OG HELMETS </Navbar.Brand>
      <Nav className="me-auto">
      <Link to="/" className="link" >Home</Link>  
      <a href="#products" className="link" > Products</a>  
      </Nav>
      <Link to="/login" className='btn btn-primary'>Login</Link>
    </Container>
  </Navbar>
  )
}

export default Header