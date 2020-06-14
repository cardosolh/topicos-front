import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PessoaListaComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
