import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.mode.';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    switch (filtro) {
      case 'completados':
        return todos.filter(({ completado }) => completado)
      case 'pendientes':
        return todos.filter(({ completado }) => !completado)
      default:
        return todos;
    }

  }

}
