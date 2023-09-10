import React, { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [confetti, setConfetti] = useState(false);
    const { width, height } = useWindowSize()
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="mt-2 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-center text-gradient font-extrabold">ApexCommerce</h1>

            <p className="mt-3 text-lg text-slate-700">
                Welcome to Apexcommerce! 
                <br></br>Browse our store to see our products! 
                <br></br>Our products come from the best luxury brands and are also made by us with extremely premium quality!
                <br></br>Hope you're able to find what you're looking for!
            </p>

            <button onClick={() => navigate('/products')} className="mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Go to shop</button>
        </div>
    )
}