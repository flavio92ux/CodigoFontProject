import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';
import fetchGetAllProducts from '../services/fetchGetAllProducts';

function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchGetAllProducts()
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) return 'Loading...';

  return (
    <>
      <Header />
      <div className="products">
        { products.map(({ _id, productName, price, amount, image }) => (
          <ItemCard
            id={ _id }
            key={ _id }
            productName={ productName }
            price={ price }
            amount={ amount }
            image={ image }
          />
        )) }
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
