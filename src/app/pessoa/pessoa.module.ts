import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { MatIconModule } from '@angular/material/icon';
import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PessoaListaComponent, PessoaFormularioComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    PessoaRoutingModule,
    FormsModule
  ]
})
export class PessoaModule { }
