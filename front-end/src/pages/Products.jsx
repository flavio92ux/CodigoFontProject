import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';

function Products() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="products">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <br />
      <Button
        onClick={ () => navigate('/registerProduct') }
      >
        Register new product
      </Button>
    </>
  );
}

export default Products;
