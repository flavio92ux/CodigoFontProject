import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function ItemCard({ productName, price, amount, image }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Card
      style={ { width: '18rem' } }
      className="menuCard"
      onClick={ handleClick }
      id={ click && 'menuCard' }
    >
      <Card.Body>
        <Card.Title>{ `Nome: ${productName}` }</Card.Title>
        <Card.Img
          variant="top"
          height="250px"
          src={ image }
        />
        <Card.Text>
          { `Preço R$${price}` }
        </Card.Text>
        <Card.Text>
          { `Estoque: ${amount}` }
        </Card.Text>
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
