import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useProducts } from '../context/productsProvider';

function ItemCard({ id, productName, price, amount, image }) {
  const { myId, setMyId, setAction } = useProducts();
  const [clicked, setClicked] = useState(false);
  const conditionFoundId = -1;

  const handleClick = () => {
    const currentListIds = myId;
    const index = myId.indexOf(id);

    if (index > conditionFoundId) {
      currentListIds.splice(index, 1);
      setClicked(false);
      setMyId(currentListIds);
    } else {
      currentListIds.push(id);
      setClicked(true);
      setMyId(currentListIds);
    }

    setAction(myId.length === 0);
  };

  return (
    <Card
      style={ { width: '18rem' } }
      className="menuCard"
      onClick={ handleClick }
      id={ clicked ? 'menuCard' : '' }
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
