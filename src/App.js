import logo from './logo.svg';
import './App.css';
import Counter from './Counter'; 
import {createStore, configureStore} from 'redux';
import reducer from './reducer'
import { DECREASE,INCREASE,RESET } from './actions';
import { Provider } from 'react-redux';



//setup reducder
const defaultState = {
  count : 76,
  name : 'bob'
}


function App() {



  //steup store 
  const store = createStore(reducer,defaultState); 
  

  // store.dispatch({ type: DECREASE})
  
  // store.dispatch({ type: INCREASE})

  
  // store.dispatch({ type: RESET})
  
  console.log(store.getState(),'store');
  
  return (
    <div>
      <Provider store={store}>
        <Counter random="random value"/>
      </Provider>
    </div>
  );
}

export default App;
