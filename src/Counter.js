import React,{useState} from 'react';

import {connect} from 'react-redux';
import { decrease , increase , reset , modalOpen } from './actions';
//DECREASE, INCREASE, MODAL_OPEN, RESET
function Counter({name,count,increase,decrease,reset,modalOpen}){
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
              {/* <button type='button' className="btn" onClick={() => decrease({type : DECREASE})}>
                decrease
              </button>
              <button type='button' className="btn" onClick={() => reset({ type: RESET })}>
                Reset
              </button>
              <button type='button' className="btn" onClick={() => increase({ type : INCREASE})}>
                Increase
              </button>
              */}
              {/* ///////////////////////////////////////////////////////////Second Way////////////////////////////////////////////// */}
              
              {/* <button type='button' className="btn" onClick={decrease}>
                decrease
              </button>
              <button type='button' className="btn" onClick={reset}>
                Reset
              </button>
              <button type='button' className="btn" onClick={increase}>
                Increase
              </button> */}
              <button type='button' className="btn" onClick={decrease}>
                decrease
              </button>
              <button type='button' className="btn" onClick={() => {
                reset();
                modalOpen("susan","lorem impsom")
              }}>
                Reset
              </button>
              <button type='button' className="btn" onClick={increase}>
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

////////////////////////////////////////////////////////////////////////////////////////////Third Way////////////////////////////////////////////////////
// const mapDispatchToProps = {
//   increase,
//   reset,
//   decrease,
//   modalOpen
// }
///////////////////////////////////////////////////////////////////////////////////////////
// function mapDispatchToProps(dispatch,ownProps){
//     console.log(ownProps,'ownProps');

//     return {
///////////////////////////////////////////////////////////////////////////////////////////////////////////SECOND WAY ///////////////////////////////////
//         //  increase: () => dispatch({type : INCREASE}),
//         //  decrease: () => dispatch({type : DECREASE}),
//         //  reset: () => {
//         //   dispatch({type : RESET })
//         //   dispatch({type : MODAL_OPEN, payload:{name: 'behzad',text: 'LOREM IPSUM DOLOR SIT'} })
//         //////////////////////////////////////////////////////////////////////////////////////////////////FIRST WAY////////////////////////////////
//          increase: () => dispatch(increase()),
//          decrease: () => dispatch(decrease()),
//          reset: () => {
//          dispatch(reset())
//          dispatch(modalOpen("susan","lorem imsom"))  
      
//       }
//     }
// }

////////////first way of connection 
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);


export default connect(mapStateToProps,{
  increase,
  reset,
  decrease,
  modalOpen
})(Counter)

