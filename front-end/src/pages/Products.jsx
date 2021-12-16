import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';
import { useProducts } from '../context/productsProvider';
import fetchGetAllProducts from '../services/fetchGetAllProducts';
import fetchOrder from '../services/fetchOrder';

function Products() {
  const [products, setProducts] = useState([]);
  const { myId } = useProducts();
  const [checkout, setCheckout] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchGetAllProducts()
      .then((data) => setProducts(data));
  }, [checkout]);

  const handleOrder = async () => {
    const token = localStorage.getItem('token');
    const check = await fetchOrder(myId, token);
    setCheckout(check);
  };

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
      <Button
        className="cartBtn"
        disabled={ !myId }
        onClick={ handleOrder }
      >
        Adicionar ao carrinho
      </Button>
    </>
  );
}

export default Products;
