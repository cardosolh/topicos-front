import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';
import { FormsModule } from '@angular/forms';
import { Perfil } from '../perfil.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-formulario',
  templateUrl: './perfil-formulario.component.html',
  styleUrls: ['./perfil-formulario.component.scss']
})
export class PerfilFormularioComponent implements OnInit {

  constructor(private service: PerfilService, private router: Router) { }

  perfil: Perfil =
    {
      id: Math.floor(1000 * Math.random()),
      descricao: ''
    };
  ngOnInit(): void {
  }

  salvar(perfil): void {
    console.log(perfil.nome);
    this.service.postPerfil(perfil).subscribe(
      data => {
        this.router.navigate(['/perfil']);

      },
      error => { }
    );
  }
  deletar(id: number): void {
    this.service.deletePerfil(id).subscribe(
      data => {
        this.router.navigate(['/perfil']);

      },
      error => { }
    );

  }
}
