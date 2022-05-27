import React,{useState} from 'react';

import {connect} from 'react-redux';
import { DECREASE, INCREASE, MODAL_OPEN, RESET } from './actions';

function Counter({name,count,increase,decrease,reset}){
    // console.log(props,'state')

    // const amount = props.state.count;
    // const name = props.state.name;

    // const [count,setCount] = useState(0);

    return (
        <div className='container'>
            <h1>
              Counter
            </h1>
            <h2>{name}</h2> 
            <p className='counter'>{count}</p>
            <div className="counter">
              <button type='button' className="btn" onClick={() => decrease({type : DECREASE})}>
                decrease
              </button>
              <button type='button' className="btn" onClick={() => reset({ type: RESET })}>
                Reset
              </button>
              <button type='button' className="btn" onClick={() => increase({ type : INCREASE})}>
                Increase
              </button>
            </div>
       
        </div>
    
    )
}

// function mapStateToProps(state){
//     return {
//         count: state.count,
//         name: state.name
//     }
// }
function mapStateToProps({countState : {count , name}}){
  return {
      count: count,
      name:  name
  }
}
function mapDispatchToProps(dispatch,ownProps){
    console.log(ownProps,'ownProps');

    return {
         increase: () => dispatch({type : INCREASE}),
         decrease: () => dispatch({type : DECREASE}),
         reset: () => {
          dispatch({type : RESET })
          dispatch({type : MODAL_OPEN, payload:{name: 'behzad',text: 'LOREM IPSUM DOLOR SIT'} })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);