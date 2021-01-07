import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import { Greetings } from './Greetings';
import { useFetch } from './useFetch';
import {useForm} from './useForm';

function initialState() {
    return {count:10, count2:20};
}

const App = () => { 
    const [values, handleChange] = useForm({
        email:'',
        password:'',
        firstName: ''
    });
    
    const [showGreeting, setShowGreeting] = React.useState(true);

    // API useEffect
    // http://numbersapi.com/43/trivia

    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
        <button onClick={() => setShowGreeting(!showGreeting)}>toggle</button>
        {showGreeting && <Greetings/>}
    
        <input ref={inputRef} name='email' value={values.email} onChange={handleChange}/>
        <input name='firstname' value={values.firstname} onChange={handleChange}/>
        <input type='password' 
            name='password' 
            value={values.password} 
            onChange={handleChange} />
        <button onClick={() => {
            if(inputRef.current !== null) {
                inputRef.current.focus();
            }
        }}>focus</button>
    </div>
  );
}

export default App;
