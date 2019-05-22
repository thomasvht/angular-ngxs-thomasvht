import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<any[]>;

  constructor() { }

  ngOnInit() {
  }

  complete(todo: any) {
    // this.todosService.complete(todo);
  }

  delete(id: any) {
    // this.todosService.delete(id);
  }

  trackByFn(index, todo) {
    return todo.id;
  }

}
