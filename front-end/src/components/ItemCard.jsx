import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function ItemCard({ productName, price, amount, image }) {
  return (
    <Card style={ { width: '18rem' } }>
      <Card.Body>
        <Card.Title>{ productName }</Card.Title>
        <Card.Img
          variant="top"
          src={ image }
        />
        <Card.Text>
          { price }
        </Card.Text>
        <Card.Text>
          { amount }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default ItemCard;
