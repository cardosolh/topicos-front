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
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(g => g.PerfilModule)
  },
  {
    path: 'recurso',
    loadChildren: () => import('./recurso/recurso.module').then(g => g.RecursoModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(g => g.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
