import { filtrosValidos } from './../filtro/filtro.actions';
import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroPipe'
})
export class FiltroPipe implements PipeTransform {

  // todos => value : el valor qe esta detras del uso del pipe
  // filtro => ...args : son los argumentos que se pasan despues de declarar el pipe con dos puntos
  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {    
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
