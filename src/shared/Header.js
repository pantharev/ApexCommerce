import React, { useEffect, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShopContext } from '../context/shop-context';

export default function Header(){

    const [items, setItems] = useState(0);

    const { cartItems } = useContext(ShopContext);

    useEffect(() => {
        let totalItems = 0;
        Object.entries(cartItems).forEach(([key, value]) => {
            totalItems += value;
        });
        setItems(totalItems);
    }, [cartItems])

    return (
    <header>
        <ul className="flex justify-left text-purple-600 gap-x-3">
          <li className="flex justify-center content-center">
            <h1>ApexCommerce</h1>
            <img src="./img/apex_commerce_logo2_crop.png" width="50" height="50"></img>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="flex gap-x-1 items-center"><AiOutlineShoppingCart /> Cart ({items})</Link>
          </li>
          <li>
            <Link to="/stone-game" className="flex gap-x-1 ml-5 items-center text-slate-100"> stone-game</Link>
          </li>
        </ul>
      </header>
    )
}