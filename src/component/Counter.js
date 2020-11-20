import React, { useState } from 'react';

const Counter = () => {

    const [value, setValue] = useState(0)
    const [sad, happy] = useState(false)


    const decrement = () => {
        setValue((prev) =>{ return prev - 1});
    }

    const toggler = () => {
        happy((prev) =>{ return !prev});
    }

    return (
        <React.Fragment>
            <h1>Counter {value}</h1>
            <button onClick={decrement}>CLICK ME</button>

    <h1 className={sad ? 'yes': 'no'}>Feeling {sad ? 'Sad': 'Happy'}</h1>
            <button onClick={toggler}>CLICK ME</button>

        </React.Fragment>
    )
}

export default Counter;
