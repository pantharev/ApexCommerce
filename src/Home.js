import React, { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Home() {

    const [confetti, setConfetti] = useState(false);
    const { width, height } = useWindowSize()

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to ApexCommerce!</p>
            <button onClick={() => setConfetti(prev => !prev)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Confetti</button>
            {confetti && <Confetti
                width={width}
                height={height}
                /> }
        </div>
    )
}