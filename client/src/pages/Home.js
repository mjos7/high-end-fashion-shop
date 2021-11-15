import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import Cart from '../components/Cart';
import { shoesOptions } from '../components/data/shoesOptions';

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
      {/* {shoesOptions.map(shoe => (
        <div>
          <h1>{shoe.name}</h1>
          <img src={shoe.src} />
        </div>
      ))} */}
    </div>
  );
};

export default Home;
