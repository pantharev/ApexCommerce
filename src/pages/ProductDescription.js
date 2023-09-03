import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

export default function ProductDescription() {

    const params = useParams();
    const location = useLocation();
    const { name, color, description, price, img } = location.state;

    useEffect(() => {
        console.log(params.id);
    }, [params.id]);

    return (
        <div className="flex">
            <div> {/* Images carousel container */}
                <img src={'../' + img}></img>
            </div>
            <div>
                <h2>{name}</h2>
                {description.split("\n").map((line) => (
                    <p className="mt-3 text-left ml-5">{line}</p>
                ))}

                <div className="mt-3 flex flex-col gap-y-3">
                    <button className="border border-slate-700 p-5 w-[50%] ml-5">Add to Cart</button>
                    <button className="border border-slate-700 p-1 w-[50%] ml-5 flex items-center"><FaRegHeart className="mr-2"/> Save to wishlist</button>
                </div>
            </div>
        </div>
    )
}