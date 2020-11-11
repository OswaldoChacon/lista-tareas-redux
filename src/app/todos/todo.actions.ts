import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Agregar',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle',
    props<{ id: number }>()
);