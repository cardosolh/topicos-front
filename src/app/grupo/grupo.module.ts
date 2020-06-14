import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [GrupoListaComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
