import React, {useState} from 'react';
import './App.scss';

function initialState() {
    return {count:10, count2:20};
}

const App = () => { 
  const [count3, setCount3] = useState(30);
  const [{count, count2}, setCount] = useState(() => initialState());

  return (
    <div>
        <button onClick={() => {
            setCount(currentState => ({...currentState, count: currentState.count + 1}))
            setCount3(c3 => c3 + 1)
        }
            }>+</button>
        <div>count 1:{count}</div>
        <div>count 2:{count2}</div>
        <div>count 3:{count2}</div>
    </div>
  );
}

export default App;
