import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pessoa',
    loadChildren: () => import('./pessoa/pessoa.module').then(p => p.PessoaModule)
  },
  {
    path: 'anotacao',
    loadChildren: () => import('./anotacao/anotacao.module').then(a => a.AnotacaoModule)
  },
  {
    path: 'grupo',
    loadChildren: () => import('./grupo/grupo.module').then(g => g.GrupoModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(g => g.FaqModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
