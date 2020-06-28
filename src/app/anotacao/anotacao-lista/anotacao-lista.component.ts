import { Observable } from 'rxjs';
import { AnotacaoService } from '../anotacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loja } from '../loja.interface';
@Component({
  selector: 'app-anotacao-lista',
  templateUrl: './anotacao-lista.component.html',
  styleUrls: ['./anotacao-lista.component.scss']
})
export class AnotacaoListaComponent implements OnInit {

  loja: Observable<Loja>;
  constructor(private anotacaoService: AnotacaoService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.loja);
    this.loja = this.anotacaoService.getLojas();
  }
}
