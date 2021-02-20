import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[Todos] crear',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[Todos] toggle',
    props<{ id: number }>()
)

export const editar = createAction(
    '[Todos] editar',
    props<{ id: number, texto: string }>()
)