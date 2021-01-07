import React, {useEffect, useRef} from 'react';

export const Greetings = () => {
    const renders = useRef(0);

    console.log('Greeting renders: ' + renders.current++);
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
            Greetings
        </div>
    )
}