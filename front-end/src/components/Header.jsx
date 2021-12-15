import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Products</Navbar.Brand>
        <Button
          variant="outline-success"
        >
          Sair
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
