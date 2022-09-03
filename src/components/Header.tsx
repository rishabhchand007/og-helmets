import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar  variant="dark" style={{backgroundColor:"#ee5253"}} >
    <Container style={{backgroundColor:"#ee5253"}}>
      <Navbar.Brand> OG HELMETS </Navbar.Brand>
      <Nav className="me-auto">
      <Link to="/" className="link" >Home</Link>  
      <a href="#products" className="link" > Products</a>  
      </Nav>
      <Link to="/login" className='btn btn-danger' style={{backgroundColor:"#ee5253"}}>Login</Link>
    </Container>
  </Navbar>
  )
}

export default Header