import { Observable } from 'rxjs';
import { AnotacaoService } from '../anotacao.service';
import { Component, OnInit } from '@angular/core';
import { Anotacao } from '../anotacao.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-anotacao-lista',
  templateUrl: './anotacao-lista.component.html',
  styleUrls: ['./anotacao-lista.component.scss']
})
export class AnotacaoListaComponent implements OnInit {

  anotacao: Observable<Anotacao>;
  constructor(private anotacaoService: AnotacaoService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.anotacao);
    this.anotacao = this.anotacaoService.getAnotacao();
  }

  deletar(id: number): void {
    this.anotacaoService.deleteAnotacao(id).subscribe(
      data => {
        this.router.navigate(['/anotacao']);

      },
      error => { }
    );

  }
}
