
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.mode.';
import * as actions from './todo.actions'

const initialState: Todo[] = [
    new Todo('Salva al mundo'),
    new Todo('Destruir al mundo'),
    new Todo('Buscarl al mundo'),
    new Todo('Ver al mundo'),
];

const reducer = createReducer(initialState,
    on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(actions.toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo
            }
        })
    }),
    on(actions.editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo
            }
        })
    }),
    on(actions.borrar, (state, { id }) => state.filter(todo => todo.id != id)),
    on(actions.toggleAll, (state, { completado }) => {
        return state.map(todo => {
            return {
                ...todo,
                completado: completado
            }
        })
    }),
    on(actions.eliminarListos, state => state.filter(({ completado }) => !completado))
);

export const todoReducer = (state, action) => {
    return reducer(state, action)
}