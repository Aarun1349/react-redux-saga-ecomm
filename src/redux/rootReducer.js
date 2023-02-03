import { combineReducers } from "redux";
import productReducer from './productReducer'
export  const rootReducer =(combineReducers({
        reducer:"reducer",
        productReducer:productReducer
}))


export default rootReducer;