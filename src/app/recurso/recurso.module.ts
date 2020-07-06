import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';
import { RecursoFormularioComponent } from './recurso-formulario/recurso-formulario.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [RecursoListaComponent, RecursoFormularioComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RecursoRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class RecursoModule { }
