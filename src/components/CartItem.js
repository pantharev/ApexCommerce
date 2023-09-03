import React from 'react';

export const CartItem = (props) => {
    const { id, name, color, description, price, img } = props.data;


    return (
        <div className="w-[700px] h-[250px] flex items-center shadow-xl rounded-[25px] m-8">
            <img className="w-[200px] h-[200px]" src={img} />
            <div className="w-[100%] text-3xl">
                <p><b>{name}</b></p>
                <p>${price}</p>
            </div>
        </div>
    )
}