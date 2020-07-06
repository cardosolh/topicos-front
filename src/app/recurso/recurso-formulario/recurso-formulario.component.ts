import { Router } from '@angular/router';
import { RecursoService } from '../recurso.service';
import { FormsModule } from '@angular/forms';
import { Recurso } from '../recurso.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recurso-formulario',
  templateUrl: './recurso-formulario.component.html',
  styleUrls: ['./recurso-formulario.component.scss']
})
export class RecursoFormularioComponent implements OnInit {

  constructor(private service: RecursoService, private router: Router) { }

  recurso: Recurso =
    {
      id: Math.floor(1000 * Math.random()),
      descricao: ''
    };
  ngOnInit(): void {
  }

  salvar(recurso): void {
    console.log(recurso.nome);
    this.service.postRecurso(recurso).subscribe(
      data => {
        this.router.navigate(['/recurso']);

      },
      error => { }
    );
  }
  deletar(id: number): void {
    this.service.deleteRecurso(id).subscribe(
      data => {
        this.router.navigate(['/recurso']);

      },
      error => { }
    );

  }
}
