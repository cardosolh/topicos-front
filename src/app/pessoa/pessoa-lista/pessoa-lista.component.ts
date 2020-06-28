import { Usuario } from './../usuario.interface';
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

  usuario: Observable<Usuario>;
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    console.log(this.usuario);
    this.usuario = this.pessoaService.getUsuarios();
  }



}
