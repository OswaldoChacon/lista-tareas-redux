import { Todo } from './models/todo.model';
import { createReducer, on, State, Action } from '@ngrx/store';
import * as actions from './todo.actions';



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
    }),
    on(actions.editar, (state, { id, texto }) => {
        // no modificar el state
        // no es valido hacer state[indice]
        return state.map(todo => {
            if (todo.id === id)
                return {
                    ...todo,
                    texto: texto
                }
            else return todo;
        })
    }),
    on(actions.borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(actions.toggleAll, (state, { completado }) => {
        return state.map(todo => {
            return {
                ...todo,
                completado
            }
        })
    }),
    on(actions.limpiarLista, (state) => state.filter(todo => !todo.completado))
);

export function todoReducer(state, action: Action) {
    return _todoReducer(state, action);
}