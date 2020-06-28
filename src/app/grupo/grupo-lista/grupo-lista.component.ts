import { UnidadeSaude, UsuariosEncontrados } from './../unidadeSaude.interface';
import { Observable } from 'rxjs';
import { GrupoService } from '../grupo.service';
import { Component, OnInit } from '@angular/core';
import { Grupo } from '../grupo.interface';
@Component({
  selector: 'app-grupo-lista',
  templateUrl: './grupo-lista.component.html',
  styleUrls: ['./grupo-lista.component.scss']
})
export class GrupoListaComponent implements OnInit {

  unidadeSaude: Observable<UnidadeSaude>;

  usuariosInfectados: UsuariosEncontrados;
  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
    console.log(this.unidadeSaude);
    this.unidadeSaude = this.grupoService.getUnidadesSaude();
  }

  getUsuariosInfectados(lat: number, lon: number): void {
    this.grupoService.getUsuariosInfectados(lat, lon, 500, true)
      .subscribe(usuariosInfectados => this.usuariosInfectados = usuariosInfectados);
    console.log(this.usuariosInfectados);
  }



}
