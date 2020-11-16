import { filtrosValidos } from './filtro/filtro.actions';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer'
import { ActionReducerMap} from '@ngrx/store';

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}



export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}


