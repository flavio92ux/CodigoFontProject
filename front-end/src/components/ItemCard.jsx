import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useProducts } from '../context/productsProvider';

function ItemCard({ id, productName, price, amount, image }) {
  const { myId, setMyId } = useProducts();

  const handleClick = () => {
    if (myId === id) {
      setMyId('');
    } else {
      setMyId(id);
    }
  };

  return (
    <Card
      style={ { width: '18rem' } }
      className="menuCard"
      onClick={ handleClick }
      id={ id === myId ? 'menuCard' : '' }
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
