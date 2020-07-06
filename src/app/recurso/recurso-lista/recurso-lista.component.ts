import { Observable } from 'rxjs';
import { RecursoService } from '../recurso.service';
import { Component, OnInit } from '@angular/core';
import { Recurso } from '../recurso.interface';
@Component({
  selector: 'app-recurso-lista',
  templateUrl: './recurso-lista.component.html',
  styleUrls: ['./recurso-lista.component.scss']
})
export class RecursoListaComponent implements OnInit {

  recurso: Observable<Recurso>;
  constructor(private recursoService: RecursoService) { }

  ngOnInit(): void {
    console.log(this.recurso);
    this.recurso = this.recursoService.getRecurso();
  }

  apagar(id: number) {
    console.log(this.recurso);
    this.recursoService.deleteRecurso(id).subscribe();

  }

}
