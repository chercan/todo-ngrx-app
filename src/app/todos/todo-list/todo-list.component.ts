import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.mode.';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('todos').subscribe(resTodos => {
      this.todos = resTodos;
    })

  }

}
