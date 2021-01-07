import React, {useEffect, useRef, useState} from 'react';
import { useFetch } from './useFetch';

export const Greetings = () => {
    const [count, setCount] = useState(() => 
        JSON.parse(localStorage.getItem('count') as any)
    );
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count]);

    // const renders = useRef(0);

    // console.log('Greeting renders: ', renders.current++);
    /* Called each time the app renders */
    useEffect(() => {
        // Cleanup function
        return () => {
            console.log('unmount');
        }
    }, 
    /* Dependency Array that the effect depends on */
    []);

    return(
        <div>
            <div>{!data ? 'loading...' : data} </div>
            <div>count: {count}</div>
            <button onClick={() => setCount((c:any) => c+1)}>increment</button>
        </div>
        
    )
}