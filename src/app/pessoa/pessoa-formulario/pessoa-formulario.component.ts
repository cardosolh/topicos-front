import { Usuario } from './../usuario.interface';
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

  usuario: Usuario =
    {
      Id: Math.floor(1000 * Math.random()),
      Nome: '',
      InfectadoCovid: true,
      Localizacao: {
        Latitude: 0,
        Longitude: 0
      },
      Questionario: []
    };
  ngOnInit(): void {
  }

  salvar(usuario): void {
    console.log(usuario.nome);
    this.service.postUsuario(usuario).subscribe(
      data => {
        this.router.navigate(['/pessoa']);

      },
      error => { }
    );
  }
  // deletar(id: number): void {
  //   this.service.deletePessoa(id).subscribe(
  //     data => {
  //       this.router.navigate(['/pessoa']);

  //     },
  //     error => { }
  //   );

  // }
}
