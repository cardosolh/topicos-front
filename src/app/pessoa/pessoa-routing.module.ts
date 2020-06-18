import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PessoaListaComponent
  },
  {
    path: 'form',
    component: PessoaFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
