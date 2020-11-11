import { crear } from './../todo.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  textInput: FormControl;
  constructor(
    private store: Store<AppState>
  ) {
    this.textInput = new FormControl('s', [Validators.required]);
  }

  ngOnInit(): void {
  }

  agregar() {
    if (this.textInput.invalid)
      return;
    this.store.dispatch(crear({ texto: this.textInput.value }));
    this.textInput.reset();
  }

}
