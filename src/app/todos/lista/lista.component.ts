import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // todos: Todo[] = [];
  todos$: Observable<Todo[]>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.todos$ = this.store.select('todos');
  }

}
