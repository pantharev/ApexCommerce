import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';

export default function ProductThumbnail({ id, name, color, description, price, img }) {

    const { cartItems } = useContext(ShopContext);

    return (
    <div class="group relative shadow-xl">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={img} alt={name} class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-800">
              <Link to={'../products/' + id} state={{ name, color, description, price, img }}> {/* TODO: link to product description page */}
                <span aria-hidden="true" class="absolute inset-0"></span>
                {name} {cartItems[id] > 0 && <> - ({cartItems[id]}) </>}
              </Link>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{color}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </div>
    )
}