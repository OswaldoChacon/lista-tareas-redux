import { toggleAll } from './../todo.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  completado: boolean = false;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  checkAll() {
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({ completado: this.completado }))
  }

}
