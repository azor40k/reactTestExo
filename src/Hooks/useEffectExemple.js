import React, { useState, useEffect } from 'react';

function UseEffecteExemple() {

    const [count, setCount] = useState (0);

    useEffect( () => {
        document.title =`Vous avez cliqué ${count} fois`;
    })
    return (
        <center>
            <h2>UseEffecteExemple</h2>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(count + 1)}>Clique ici</button>
        </center>
    )
}

export default UseEffecteExemple;