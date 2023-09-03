import React, { useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { ShopContext } from "../context/shop-context";

export default function ProductDescription() {

    const { addToCart, cartItems } = useContext(ShopContext);

    const params = useParams();
    const location = useLocation();
    const { name, color, description, price, img } = location.state;

    useEffect(() => {
        console.log(params.id);
    }, [params.id]);

    const cartItemAmount = cartItems[params.id]

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-[50%]"> {/* Images carousel container */}
                <img src={'../' + img}></img>
            </div>
            <div className="md:w-[50%]">
                <h2>{name}</h2>
                {description.split("\n").map((line) => (
                    <p className="mt-3 text-center md:text-left ml-5">{line}</p>
                ))}

                <div className="mt-3 flex flex-col gap-y-3">
                    <button className="border border-slate-700 p-3 md:p-5 w-[50%] ml-5" onClick={() => addToCart(params.id)}>
                        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
                    </button>
                    <button className="border border-slate-700 p-1 w-[50%] ml-5 flex items-center"><FaRegHeart className="mr-2"/> Save to wishlist</button>
                </div>
            </div>
        </div>
    )
}