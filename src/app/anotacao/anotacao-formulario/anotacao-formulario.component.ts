import { Router } from '@angular/router';
import { AnotacaoService } from './../anotacao.service';
import { FormsModule } from '@angular/forms';
import { Anotacao } from './../anotacao.interface';
import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-anotacao-formulario',
  templateUrl: './anotacao-formulario.component.html',
  styleUrls: ['./anotacao-formulario.component.scss']
})
export class AnotacaoFormularioComponent implements OnInit {

  constructor(private service: AnotacaoService, private router: Router) { }

  anotacao: Anotacao =
    {
      id: Math.floor(1000 * Math.random()),
      obs: '',
      data: new Date(),
      id_grupo: 0,
      id_pessoa: 0
    };
  ngOnInit(): void {
  }

  // salvar(anotacao): void {
  //   console.log(anotacao.id);
  //   this.service.postAnotacao(anotacao).subscribe(
  //     data => {
  //       this.router.navigate(['/anotacao']);

  //     },
  //     error => { }
  //   );
  // }


}

