import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {AddTodo} from "../statemanagement/todos/todos.actions";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  add(input: HTMLInputElement) {
    this.store.dispatch(new AddTodo(input.value))
    .subscribe(state => {
      console.log(state);
      input.value = '';
    });
  }
}
