import { Pessoa } from './../../pessoa/pessoa.interface';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';
import { Login } from '../login.interface';
import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { empty } from 'rxjs';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.scss']
})
export class LoginFormularioComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) { }

  login: Login =
    {
      id: Math.floor(1000 * Math.random()),
      user: '',
      password: '',
      id_perfil: 0,
      id_pessoa: 0,
      pessoa: null
    };
  ngOnInit(): void {
  }

  salvar(login): void {
    console.log(login.id);
    this.service.postLogin(login).subscribe(
      data => {
        this.router.navigate(['/login']);

      },
      error => { }
    );
  }


}

