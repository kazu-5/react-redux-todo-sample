import {ActionTypes} from './ActionTypes'
import {AppState, Todo} from './State'

const initialState:AppState = {todos:[]}

export function todo(state: AppState = initialState, action: any): AppState {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            var todo = new Todo(action.todo.text,false)
            return (<any>Object).assign({}, state, {
                todos: [ ...state.todos, todo ]
            });
        case ActionTypes.COMPLETE_TODO:
            var id = action.todo.id
            return (<any>Object).assign({}, state, {
                todos: state.todos.map(todo => (
                todo.id === id ?
                    (<any>Object).assign({}, todo, { completed: !todo.completed }) :
                    todo
                ))
            });
        default:
            return state
    }
}