import {TodoItem} from "./todos.state";

export class AddTodo {
  public static readonly type = '[Todos] Add item';
  constructor(public payload: string) { }
}

export class CompleteTodo {
  public static readonly type = '[Todos] Complete item';
  constructor(public todo: TodoItem) {  }
}

export class DeleteTodo {
  public static readonly type = '[Todos] Delete item';
  constructor(public id: string) { }
}
