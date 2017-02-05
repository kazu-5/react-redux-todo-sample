import * as React from 'react'
import {Component} from 'react'
import {AppState, Todo} from './State'
import {Dispatcher} from './Dispatcher'

//---------------------------
// TODO 1アイテム
//---------------------------
interface TodoComponentProps{
    todo: Todo
    actions: Dispatcher
}
class TodoComponent extends Component<TodoComponentProps, {}> {
    handleClick() {
        this.props.actions.complete(this.props.todo)
    }
    render() {
        return (
            <li 
                onClick={this.handleClick.bind(this)}
                style={ {
                    textDecoration: this.props.todo.completed ? 'line-through' : 'none',
                    fontSize: '40px'
                } }
            >
                {this.props.todo.text}
            </li>
        )
    }
}

//---------------------------
// TODOリスト
//---------------------------
interface TodoListComponentProps{
    state: AppState
    actions: Dispatcher
}
class TodoListComponent extends Component<TodoListComponentProps, {}> {
    render() {
        var todos = this.props.state.todos.map(
            x => <TodoComponent key={x.id} todo={x} actions={this.props.actions}/>)
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

//---------------------------
// 入力フォーム
//---------------------------
interface TodoFormComponentProps{
    actions: Dispatcher
}
interface TodoFormComponentState{
    text:string
}
class TodoFormComponent extends Component<TodoFormComponentProps, TodoFormComponentState> {
    constructor(props: TodoFormComponentProps) {
        super(props)
        this.state = {
            text: '',
        }
    }
    private handleSubmit(e: React.SyntheticEvent<{}>) {
        e.preventDefault()
        var todo = new Todo(this.state.text,false)
        this.props.actions.add(todo)
        this.setState({text: ''})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type='text'
                    value={this.state.text}
                    onChange={(event)=>{this.setState({text: ((event.target as any).value as string)})}}
                    style={{fontSize:'16px'}}
                />
                <input type='submit' value='追加' 
                    style={{fontSize:'16px'}}
                />
            </form>
        )
    }
}

//---------------------------
// TODOアプリ全体
//---------------------------
interface ComponentsProps{
    state: AppState
    actions: Dispatcher
}
export default class Components extends Component<ComponentsProps, {}> {
    render(){
    return (
        <div>
            <TodoFormComponent actions={this.props.actions}/>
            <hr />
            <TodoListComponent state={this.props.state} actions={this.props.actions}/>
        </div>
        )
    }
}