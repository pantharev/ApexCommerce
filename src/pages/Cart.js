import React, { useContext } from 'react';
import { PRODUCTS } from '../products';
import { ShopContext } from '../context/shop-context';
import { CartItem } from '../components/CartItem';

const Cart = () => {

    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
        </div>
    )
}

export default Cart;