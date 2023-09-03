import React, { useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../products';
import { ShopContext } from '../context/shop-context';
import { CartItem } from '../components/CartItem';
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const Cart = () => {

    const [confetti, setConfetti] = useState(false);
    const [items, setItems] = useState(0);
    const { width, height } = useWindowSize()

    const { addToCart, cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

    const subTotal = totalAmount + (totalAmount * 0.07) + (totalAmount * 0.02);

    const navigate = useNavigate();

    useEffect(() => {
        setConfetti(false);
        console.log(cartItems);
        let totalItems = 0;
        Object.entries(cartItems).forEach(([key, value]) => {
            totalItems += value;
        });
        setItems(totalItems);
    }, [cartItems])

    const handleCheckout = () => {
        checkout();
        setConfetti(true);
        //navigate('/products');
    }

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
            {confetti && <Confetti
                width={width}
                height={height}
                />}
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p className="font-bold text-left">Items ({items}): ${totalAmount}</p>
                    <p className="font-bold text-left">Taxes (7%): ${(totalAmount * 0.07).toFixed(2)}</p>
                    <p className="font-bold text-left">Shipping & handling (2%): ${(totalAmount * 0.02).toFixed(2)}</p>
                    <hr className="my-2 border border-slate-700"></hr>
                    <p className="font-bold text-left">Subtotal: ${(subTotal).toFixed(2)}</p>
                    <div className="mt-5 flex gap-x-5">
                        <button onClick={() => navigate('/products')} className="bg-black p-5 text-white rounded-xl">Continue Shopping</button>
                        <button onClick={() => handleCheckout()} className="bg-black p-5 text-white rounded-xl">Checkout</button>
                    </div>
                </div>
            ) : (
                <h1 className="font-bold text-3xl">Your Cart is Empty</h1>
            )}
        </div>
    )
}

export default Cart;