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

  grupo: Observable<Grupo>;
  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
    console.log(this.grupo);
    this.grupo = this.grupoService.getGrupo();
  }

}
