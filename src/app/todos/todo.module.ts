import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ListaComponent } from './lista/lista.component';
import { PageComponent } from './page/page.component';
import { FiltroPipe } from './filtro.pipe';




@NgModule({
  declarations: [
    AddComponent,
    FooterComponent,
    ItemComponent,
    ListaComponent,
    PageComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PageComponent
  ]
})
export class TodoModule { }
