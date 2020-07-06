import { Observable } from 'rxjs';
import { PerfilService } from '../perfil.service';
import { Component, OnInit } from '@angular/core';
import { Perfil } from '../perfil.interface';
@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.scss']
})
export class PerfilListaComponent implements OnInit {

  perfil: Observable<Perfil>;
  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    console.log(this.perfil);
    this.perfil = this.perfilService.getPerfil();
  }

  apagar(id: number) {
    console.log(this.perfil);
    this.perfilService.deletePerfil(id).subscribe();

  }

}
