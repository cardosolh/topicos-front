import { Observable } from 'rxjs';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.interface';
@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.scss']
})
export class PessoaListaComponent implements OnInit {

  pessoa: Observable<Pessoa>;
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    console.log(this.pessoa);
    this.pessoa = this.pessoaService.getPessoa();
  }

}
