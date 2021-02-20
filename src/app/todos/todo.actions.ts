import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[Todos] crear',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[Todos] toggle',
    props<{ id: number }>()
)