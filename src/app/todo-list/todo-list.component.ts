import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {TodoItem} from "../statemanagement/todos/todos.state";
import {CompleteTodo, DeleteTodo} from "../statemanagement/todos/todos.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Select('ngxsStore.todos') todos$: Observable<Array<TodoItem>>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  complete(todo: TodoItem) {
    this.store.dispatch(new CompleteTodo(todo));
  }

  delete(id: string) {
    this.store.dispatch(new DeleteTodo(id));
  }

  trackByFn(index, todo) {
    return todo.id;
  }

}
