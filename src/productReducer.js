import { SET_LOADING , GET_PRODUCTS } from './actions';


const defaultState ={
    loading: false,
    products: []
}


export default function reducer(state =defaultState, action){
    switch (action.type) {
        case SET_LOADING:
            return {...state,loading : true}
    
        case GET_PRODUCTS :
            return {...state , lodaing : false,products: action.payload}
        default:
            break;
    }

    return state

}