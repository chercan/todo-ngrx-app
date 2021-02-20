import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[ToDo] crear',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[ToDo] toggle',
    props<{ id: number }>()
)

export const editar = createAction(
    '[ToDo] editar',
    props<{ id: number, texto: string }>()
)

export const borrar = createAction(
    '[ToDo] borrar',
    props<{ id: number }>()
)

export const toggleAll = createAction(
    '[ToDo] seleccionar todo',
    props<{ completado: boolean }>()
)