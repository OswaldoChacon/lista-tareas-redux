import { Todo } from './models/todo.model';
import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { of } from 'rxjs';


const initialState: Todo[] = [
    new Todo("Estado inicial"),
    new Todo("Estado inicial"),
    new Todo("Estado inicial"),
];

const _todoReducer = createReducer(
    initialState,
    on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(actions.toggle, (state, { id }) => {
        // no modificar el state
        // no es valido hacer state[indice]
        return state.map(todo => {
            if (todo.id === id)
                return {
                    ...todo,
                    completado: !todo.completado
                }
            else return todo;
        })
    })
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}