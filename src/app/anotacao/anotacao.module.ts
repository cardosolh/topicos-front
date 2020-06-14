import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { AnotacaoListaComponent } from './anotacao-lista/anotacao-lista.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [AnotacaoListaComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    AnotacaoRoutingModule
  ]
})
export class AnotacaoModule { }
