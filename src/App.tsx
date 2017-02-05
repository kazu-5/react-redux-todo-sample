import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Components from './Components'
import store from './Store'
import {Dispatcher} from './Dispatcher'
import {Provider, connect} from 'react-redux'
import {Dispatch} from 'redux'

const TodoAppComponent = connect(
    (store: any) => {return {state: store.todo}},
    (dispatch: Dispatch<any>) => {return {actions: new Dispatcher(dispatch)}}
)(Components)

ReactDOM.render(
    <Provider store={store}>
        <TodoAppComponent />
    </Provider>
    ,
    document.getElementById('app')
)