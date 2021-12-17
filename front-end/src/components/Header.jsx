import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/products">Products</Navbar.Brand>
        <Button
          variant="outline-success"
          onClick={ handleClick }
        >
          Sair
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
