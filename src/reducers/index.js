import {combineReducers} from 'redux'
import softwareReducer from './softwareReducer';

const rootReducer = combineReducers({softwares: softwareReducer})

export default rootReducer;