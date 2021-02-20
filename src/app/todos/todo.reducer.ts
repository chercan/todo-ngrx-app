
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
            if (todo.id === id ) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo
            }
        })
    })
);

export const todoReducer = (state, action) => {
    return reducer(state, action)
}