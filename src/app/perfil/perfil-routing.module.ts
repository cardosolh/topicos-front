import { PerfilFormularioComponent } from './perfil-formulario/perfil-formulario.component';
import { PerfilListaComponent } from './perfil-lista/perfil-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PerfilListaComponent
  },
  {
    path: 'form',
    component: PerfilFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
