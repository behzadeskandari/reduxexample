
import './App.css';
import Counter from './Counter'; 
import {createStore, configureStore,applyMiddleware,combineReducers} from 'redux';
import countReducer from './countReducer'
import { Provider } from 'react-redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import thunk from 'redux-thunk';
import productReducer from './productReducer';
import modalReducer from './modalReducer';
import Modal from './Modal';
import Products from './Products';

const middleware = [thunk]

function App() {



  //steup store 
  const store = createStore(combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer
  }),
  composeWithDevTools(
       applyMiddleware(...middleware)
    // other store enhancers if any
  ));
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__()); 
  

  // store.dispatch({ type: DECREASE})
  
  // store.dispatch({ type: INCREASE})

  
  // store.dispatch({ type: RESET})
  
  console.log(store.getState(),'getState');
  
  return (
    <div>
      <Provider store={store}>
        <Counter random="random value"/>
        <Modal />
        <Products/>
      </Provider>
    </div>
  );
}

export default App;
