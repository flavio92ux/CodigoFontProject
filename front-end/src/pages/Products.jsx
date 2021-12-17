import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';
import { useProducts } from '../context/productsProvider';
import fetchGetAllProducts from '../services/fetchGetAllProducts';
import fetchOrder from '../services/fetchOrder';

function Products() {
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState();
  const { myId, setMyId, action } = useProducts();

  const navigate = useNavigate();

  useEffect(() => {
    fetchGetAllProducts()
      .then((data) => setProducts(data));
  }, [checkout]);

  useEffect(() => {
    const magicNumber = -1;
    const arrayProducts = [];
    products.forEach(({ _id }) => arrayProducts.push(_id));

    const auxMyId = myId;

    auxMyId.forEach((id, index) => {
      if (arrayProducts.indexOf(id) === magicNumber) {
        auxMyId.splice(index);
      }
    });

    setMyId(auxMyId);
  }, [products]);

  const handleOrder = () => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/');
    Promise.all(fetchOrder(myId, token)).then((data) => setCheckout(data));
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
