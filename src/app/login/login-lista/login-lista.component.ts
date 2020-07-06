import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../login.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-lista',
  templateUrl: './login-lista.component.html',
  styleUrls: ['./login-lista.component.scss']
})
export class LoginListaComponent implements OnInit {

  login: Observable<Login>;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.login);
    this.login = this.loginService.getLogin();
  }

  deletar(id: number): void {
    this.loginService.deleteLogin(id).subscribe(
      data => {
        this.router.navigate(['login']);

      },
      error => { }
    );

  }
}
