import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';
import { eliminarListos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes']

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro
      this.pendientes = state.todos.filter(todo => !todo.completado).length
    })
  }

  selectFiltro(filtro: filtrosValidos) {
    this.store.dispatch(setFiltro({ filtro: filtro }))
  }

  limpiarCompletados() {
    if (this.pendientes) { return }
    this.store.dispatch(eliminarListos())
  }

}
