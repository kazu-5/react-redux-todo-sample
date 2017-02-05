import {ActionTypes} from './ActionTypes'
import {Todo} from './State'

export class Dispatcher {
    private dispatch: (action: any) => any
    constructor(dispatch: (action: any) => any){
        this.dispatch = dispatch
    }
    public add(todo: Todo) {
        console.log('Dispatcher.add:' + todo.text)
        this.dispatch({ type: ActionTypes.ADD_TODO, todo: todo})
    }
    public complete(todo: Todo) {
        console.log('Dispatcher.complete')
        this.dispatch({ type: ActionTypes.COMPLETE_TODO, todo: todo})
    }
}