import {todo} from './Reducer'
import { createStore, combineReducers } from 'redux'

declare var window:any;

export default createStore(
    combineReducers({
        todo
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)