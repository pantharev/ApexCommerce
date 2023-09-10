import React, { useState } from 'react';

export const StoneGame = () => {

    const [stones, setStones] = useState([
        ['o', 'o', 'o'],
        ['o', 'x', 'o'],
        ['o', 'o', 'o']
    ]);

    const handleStoneTurn = (e) => {
        e.preventDefault();

        let isUpright = e.target.classList.contains("bg-stone-600");
        if(isUpright) {
            e.target.classList.replace("bg-stone-600", "bg-stone-400"); // turn over (x)
        } else {
            e.target.classList.replace("bg-stone-400", "bg-stone-600"); // turn upright (o)
        }
        //console.log(e);
    }

    return(
        <>
            <h1>Stone Game</h1>

            {stones.map(r => {
                return (
                    <div>
                    {r.map(s => 
                        s == 'o' ? <button className="rounded-md p-5 bg-stone-600" onClick={(e) => handleStoneTurn(e)}>{s}</button> : <button className="rounded-md p-5 bg-stone-600 invisible">{s}</button>
                    )}
                <br></br>
                </div>)
            })}
        </>
    )
}

export default StoneGame;