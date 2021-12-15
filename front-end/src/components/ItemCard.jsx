import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ItemCard() {
  return (
    <Card style={ { width: '18rem' } }>
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Img
          variant="top"
          src="http://localhost:3001/image/61b93f7b32469bfe97d5a0dc.jpeg"
        />
        <Card.Text>
          Price
        </Card.Text>
        <Card.Text>
          Stock
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
