import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [PessoaListaComponent, PessoaFormularioComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    PessoaRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class PessoaModule { }
