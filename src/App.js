import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  return (
    <div>
        <div className='container'>
            <h1>
              Counter
            </h1>
            <p className='counter'>{count}</p>
            <div className="counter">
              <button type='button' className="btn" onClick={() => setCount(count -1)}>
                decrease
              </button>
              <button type='button' className="btn" onClick={() => setCount(0)}>
                Reset
              </button>
              <button type='button' className="btn" onClick={() => setCount(count +1)}>
                Increase
              </button>
            </div>
        
        </div>
    
        <Counter/>
    </div>
  );
}

export default App;
