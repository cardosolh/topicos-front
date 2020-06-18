import { Observable } from 'rxjs';
import { AnotacaoService } from '../anotacao.service';
import { Component, OnInit } from '@angular/core';
import { Anotacao } from '../anotacao.interface';
@Component({
  selector: 'app-anotacao-lista',
  templateUrl: './anotacao-lista.component.html',
  styleUrls: ['./anotacao-lista.component.scss']
})
export class AnotacaoListaComponent implements OnInit {

  anotacao: Observable<Anotacao>;
  constructor(private anotacaoService: AnotacaoService) { }

  ngOnInit(): void {
    console.log(this.anotacao);
    this.anotacao = this.anotacaoService.getAnotacao();
  }

}
