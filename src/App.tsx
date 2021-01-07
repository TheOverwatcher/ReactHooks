import React, {useEffect, useState} from 'react';
import './App.scss';
import {useForm} from './useForm';

function initialState() {
    return {count:10, count2:20};
}

const App = () => { 
//   const [count3, setCount3] = useState(30);
//   const [{count, count2}, setCount] = useState(() => initialState());
    const [values, handleChange] = useForm({email:'', password:'', firstName: ''});

    /* Called each time the app renders */
    useEffect(() => {
        console.log('render');

        // Cleanup function
        return () => {
            console.log('unmount');
        }
    }, 
    /* Dependency Array that the effect depends on */
    [values.email]);

  return (
    <div>
        {/* <button onClick={() => {
            setCount(currentState => ({...currentState, count: currentState.count + 1}))
            setCount3(c3 => c3 + 1)
        }
            }>+</button>
        <div>count 1:{count}</div>
        <div>count 2:{count2}</div>
        <div>count 3:{count3}</div> */}
    
        <input name='email' value={values.email} onChange={handleChange}/>
        <input name='firstname' value={values.firstname} onChange={handleChange}/>
        <input type='password' 
            name='password' 
            value={values.password} 
            onChange={handleChange} />
    </div>
  );
}

export default App;
