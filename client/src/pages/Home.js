import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import Cart from '../components/Cart';

import ImageGrid from '../components/ImageGrid'

import { bagsOptions } from '../components/data/bagsOptions';
import { dressesOptions } from '../components/data/dressesOptions';
import { jacketsOptions } from '../components/data/jacketsOptions';
import { pantsOptions } from '../components/data/pantsOptions';
import { shoesOptions } from '../components/data/shoesOptions';
import { topsOptions } from '../components/data/topsOptions';

const Home = () => {
  const [category, updateCategory] = useState(dressesOptions)
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
      <button onClick={() => updateCategory(bagsOptions)}>Bags</button>
      <button onClick={() => updateCategory(dressesOptions)}>Dresses</button>
      <button onClick={() => updateCategory(jacketsOptions)}>Jackets</button>
      <button onClick={() => updateCategory(pantsOptions)}>Pants</button>
      <button onClick={() => updateCategory(shoesOptions)}>Shoes</button>
      <button onClick={() => updateCategory(topsOptions)}>Tops</button>
      <ImageGrid items={category}/>
    </div>
  );
};

export default Home;
