import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilListaComponent } from './perfil-lista/perfil-lista.component';
import { PerfilFormularioComponent } from './perfil-formulario/perfil-formulario.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [PerfilListaComponent, PerfilFormularioComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    PerfilRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class PerfilModule { }
