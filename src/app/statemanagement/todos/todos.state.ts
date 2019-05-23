import { State, Action, Selector, StateContext } from '@ngxs/store';
import {AddTodo, CompleteTodo, DeleteTodo} from './todos.actions';
// var uuid = require('uuid-v4');
import * as uuid from 'uuid-v4';

export class TodoItem {
  constructor(public id: string, public title: string, public completed: boolean) {

  }
}

export interface TodosStateModel {
  todos: TodoItem[];
}

@State<TodosStateModel>({
  name: 'ngxsStore',
  defaults: {
    todos: []
  }
})
export class TodosState {

  @Selector()
  public static getState(state: TodosStateModel) {
    return state;
  }

  @Action(AddTodo)
  public add(ctx: StateContext<TodosStateModel>, { payload }: AddTodo) {
    const stateModel = ctx.getState();
    const id = uuid();
    const todo = new TodoItem(id, payload, false);
    stateModel.todos = [...stateModel.todos, todo];
    ctx.setState(stateModel);
  }

  @Action(CompleteTodo)
  public complete(ctx: StateContext<TodosStateModel>, {payload}: CompleteTodo) {
    const stateModel = ctx.getState();
    stateModel.todos.map(todo => {
      if (todo.id === payload.id) {
        return Object.assign({}, payload, {
          completed: !payload.completed
        });
      }
      return todo;
    });
    ctx.setState(stateModel);
  }

  @Action(DeleteTodo)
  public delete(ctx: StateContext<TodosStateModel>, {payload}: DeleteTodo) {
    const stateModel = ctx.getState();
    stateModel.todos.filter(todo => todo.id !== payload);
    ctx.setState(stateModel);
  }
}
