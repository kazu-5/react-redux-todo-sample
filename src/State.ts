export interface AppState {
    todos: Todo[]
}

export class Todo {
    id: number = Date.now()
    constructor(public text: string, public completed: boolean = false) {
    }
}