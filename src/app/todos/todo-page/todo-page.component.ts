import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  marcados: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  marcarTodos() {
    this.marcados = !this.marcados
    this.store.dispatch(actions.toggleAll({ completado: this.marcados }))
  }

}
