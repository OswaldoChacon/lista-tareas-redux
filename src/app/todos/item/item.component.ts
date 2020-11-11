import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../models/todo.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { toggle } from '../todo.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  check: FormControl;
  textInput: FormControl;
  editando: boolean = false;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.check = new FormControl(this.todo.completado);
    this.textInput = new FormControl(this.todo.texto, [Validators.required]);
    this.check.valueChanges.subscribe(valor => {
      this.store.dispatch(toggle({ id: this.todo.id }))
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
  }


}
