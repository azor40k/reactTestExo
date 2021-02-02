import React, { useState } from 'react';

function UseStateExemple() {

    const [count, setCount] = useState (0);

    return (
        <center>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(count + 1)}>Clique ici</button>
        </center>
    )
}

export default UseStateExemple;