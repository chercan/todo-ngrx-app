
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.mode.';
import * as actions from './todo.actions'

const initialState: Todo[] = [];

const reducer = createReducer(initialState,
    on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
);

export const todoReducer = (state, action) => {
    return reducer(state, action)
}