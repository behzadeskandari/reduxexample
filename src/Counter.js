import React,{useState} from 'react';

function Counter(props){
    const amount = props.state.count;
    const name = props.state.name;

    const [count,setCount] = useState(0);

    return (
        <div className='container'>
            <h1>
              Counter
            </h1>
            <h2>{name}</h2>
            <p className='counter'>{amount}</p>
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
    
    )
}


export default Counter;