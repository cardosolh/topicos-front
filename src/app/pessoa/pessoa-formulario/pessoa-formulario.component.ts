import { Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { FormsModule } from '@angular/forms';
import { Pessoa } from './../pessoa.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-formulario',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.scss']
})
export class PessoaFormularioComponent implements OnInit {

  constructor(private service: PessoaService, private router: Router) { }

  pessoa: Pessoa =
    {
      id: Math.floor(1000 * Math.random()),
      nome: ''
    };
  ngOnInit(): void {
  }

  salvar(pessoa): void {
    console.log(pessoa.nome);
    this.service.postPessoa(pessoa).subscribe(
      data => {
        this.router.navigate(['/pessoa']);

      },
      error => { }
    );
  }
  deletar(id: number): void {
    this.service.deletePessoa(id).subscribe(
      data => {
        this.router.navigate(['pessoa']);

      },
      error => { }
    );

  }
}
