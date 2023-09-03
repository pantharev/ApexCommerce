import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

export const CartItem = (props) => {
    const { id, name, color, description, price, img } = props.data;

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);


    return (
        <div className="w-[700px] h-[250px] flex items-center shadow-xl rounded-[25px] m-8">
            <img className="w-[200px] h-[200px]" src={img} />
            <div className="w-[100%] text-3xl">
                <p><b>{name}</b></p>
                <p>${price}</p>
                <div className="mx-auto flex w-[50%]">
                    <button className="border border-slate-700" onClick={() => removeFromCart(id)}>-</button>
                    <input className="border border-slate-700 w-20" value={cartItems[id]} onChange={(e) => updateCartItemCount(parseInt(e.target.value), id)}/>
                    <button className="border border-slate-700" onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}