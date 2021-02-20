import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from '../filtro/filtro.actions';

export const initialState: filtrosValidos = 'todos'

const reducer = createReducer(initialState,
    on(setFiltro, (state, { filtro }) => filtro)
);

export const filtroReducer = (state, action) => {
    return reducer(state, action)
}