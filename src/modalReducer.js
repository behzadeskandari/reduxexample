import { MODAL_OPEN,MODAL_CLOSE } from './actions';


const defaultState ={
    isOpen: false,
    name : '',
    text: '',
}


export default function reducer(state = defaultState, action){
    // if (action.type === MODAL_OPEN) {
    //     return {
    //         ...state,
    //         isOpen: true,
    //         name: action.payload.name,
    //         text : action.payload.name
    //     }
    // }
    // if(action.type === MODAL_CLOSE){
    //     return {
    //         ...state,
    //         isOpen: false,
    //         name: '',
    //         text : ''
    //     }
    // }
    switch (action.type) {
        case MODAL_OPEN:
            return {
                ...state,
                isOpen: true,
                name: action.payload.name,
                text : action.payload.name
            }
        case MODAL_CLOSE:
            return {
                ...state,
                isOpen: false,
                name: '',
                text : ''
            }
        default:
            return state
    }

}