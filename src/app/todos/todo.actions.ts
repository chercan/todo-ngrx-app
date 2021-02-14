import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TodosAdd] crear',
    props<{ texto: string }>()
);