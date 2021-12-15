import React from 'react';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';

function Products() {
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
    </>
  );
}

export default Products;
