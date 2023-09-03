import React, { useContext } from 'react';
import { PRODUCTS } from '../products';
import { ShopContext } from '../context/shop-context';
import { CartItem } from '../components/CartItem';
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const { addToCart, cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="font-bold text-3xl">Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                <p className="font-bold">Subtotal: ${totalAmount}</p>
                <div className="mt-5 flex gap-x-5">
                    <button onClick={() => navigate('/products')} className="bg-black p-5 text-white rounded-xl">Continue Shopping</button>
                    <button onClick={() => checkout()} className="bg-black p-5 text-white rounded-xl">Checkout</button>
                </div>
                </div>
            ) : (
                <h1 className="font-bold text-3xl">Your Cart is Empty</h1>
            )}
        </div>
    )
}

export default Cart;