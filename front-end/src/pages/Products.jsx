/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';
import { useProducts } from '../context/productsProvider';
import fetchGetAllProducts from '../services/fetchGetAllProducts';
import fetchOrder from '../services/fetchOrder';

function Products() {
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState();
  const { myId, action } = useProducts();

  const navigate = useNavigate();

  useEffect(() => {
    fetchGetAllProducts()
      .then((data) => setProducts(data));
  }, [checkout]);

  const handleOrder = async () => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/');
    const check = await fetchOrder(myId, token);
    setCheckout(check);
  };

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
      <br />
      <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
        <Container>
          <Button
            onClick={ () => navigate('/registerProduct') }
          >
            Register new product
          </Button>
          <Button
            disabled={ action }
            onClick={ handleOrder }
          >
            Checkout Product
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Products;
