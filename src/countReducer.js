import { DECREASE, INCREASE, RESET } from "./actions";


//setup reducder
const defaultState = {
    count : 76,
    name : 'bob'
  }
  


export default function Countreducer(state = defaultState ,action){
    switch (action.type) {
      case DECREASE:
        return {...state , count : state.count -1};
      case INCREASE:
        return {...state, count : state.count  + 1}
      case RESET:
        return {...state, count : 0} 
  
      default:
        return state;
    }
    // console.log({action,state})
    // if (action.type === "DECREASE") {
    //     // state.count = state.count - 1;
    //     return {...state , count : state.count -1}
    // }else if (action.type === "INCREASE"){
    //   return {...state , count : state.count + 1}
    // }
    // return state;
  }
  