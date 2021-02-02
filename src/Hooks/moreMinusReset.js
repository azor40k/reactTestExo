import React, { useState } from 'react';

function useStateMoreMinusReset() {

    const [count, setCount] = useState (0);

    return (
        <center>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(0)}>Réinitialiser</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </center>
    )
}

export default useStateMoreMinusReset;