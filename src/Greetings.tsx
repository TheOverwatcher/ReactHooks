import React, {useEffect} from 'react';

export const Greetings = () => {
    /* Called each time the app renders */
    useEffect(() => {
        console.log('render');

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