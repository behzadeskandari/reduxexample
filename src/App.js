import logo from './logo.svg';
import './App.css';
import Counter from './Counter'; 
import {createStore, configureStore} from 'redux';


function App() {

  const defaultState = {
    count : 76,
    name : 'bob'
  }

  //setup reducder
  function reducer(state = defaultState ,action){
    switch (action.type) {
      case "DECREASE":
        return {...state , count : state.count -1};
      case "INCREASE":
        return {...state, count : state.count  + 1}
      case "RESET":
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


  //steup store 
  const store = createStore(reducer); 
  

  store.dispatch({ type: "DECREASE"})
  
  store.dispatch({ type: "INCREASE"})

  
  store.dispatch({ type: "RESET"})
  
  console.log(store.getState(),'store');
  
  return (
    <div>
        <Counter state={store.getState()}/>
    </div>
  );
}

export default App;
