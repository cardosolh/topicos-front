import { NoticiaListaComponent } from './noticia-lista/noticia-lista.component';
import { NoticiaRoutingModule } from './noticia-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NoticiaListaComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    NoticiaRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class NoticiaModule { }
