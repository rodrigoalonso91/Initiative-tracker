import { useState } from 'react';

export const useCounter = ( initialState = 0 ) => {
    
    const [counter, setCounter] = useState(initialState); // 10

    const reset = () => {
        setCounter( initialState );
    }

    const increment = ( amount = 1 ) => {
        setCounter( counter + amount );
    }

    const decrement = ( amount = 1 ) => {
        setCounter( counter - amount );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}