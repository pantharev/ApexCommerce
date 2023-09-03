import React, { useState } from 'react';
import ProductThumbnail from '../components/ProductThumbnail';
import { PRODUCTS } from '../products.js';


export default function Products() {
    const [products, setProducts] = useState(PRODUCTS);


    return (
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Browse Products</h2>
      
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <ProductThumbnail key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.img} />
            ))}
          </div>
        </div>
      </div>      
    )
}