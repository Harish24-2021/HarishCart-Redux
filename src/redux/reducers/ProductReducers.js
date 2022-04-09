import { ActionTypes } from "../constants/ActionTypes";


// created an initial state object for store
const initialState={
    products:[],
}

//reducer function takes inital state and action as paramenters and based on action type received
// with switch case condition , return respective state.
export const productReducer=(state=initialState,{type,payload})=>{

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};               
        default:
          return  state;
    }

}
export const selectedProductReducer = (state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {}
            default:
           return state;
    
    }
}