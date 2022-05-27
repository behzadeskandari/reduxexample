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
  function reducer(state,action){
    console.log({action,state})
    return state;
  }


  //steup store 
  const store = createStore(reducer,defaultState); 
  
  console.log(store.getState(),'store');
  return (
    <div>
        <Counter state={store.getState()}/>
    </div>
  );
}

export default App;
