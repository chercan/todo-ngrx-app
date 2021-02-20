import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const reducerFiltro = createReducer(initialState,
    on(setFiltro, (state, { filtro }) => filtro)
)

export const filtroReducer = (state, action) => {
    return reducerFiltro(state, action)
}