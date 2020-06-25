import { AnotacaoFormularioComponent } from './anotacao-formulario/anotacao-formulario.component';
import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { AnotacaoListaComponent } from './anotacao-lista/anotacao-lista.component';


import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AnotacaoListaComponent, AnotacaoFormularioComponent],
  imports: [
    CommonModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule,
    MatListModule,
    MatIconModule,
    AnotacaoRoutingModule
  ]
})
export class AnotacaoModule { }
