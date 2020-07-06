import { Login } from './login.interface';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  getLogin(): Observable<any> {
    return this.http.get('https://localhost:5002/api/Logins/1/100');
  }
  postLogin(login: Login): Observable<Login> {

    return this.http.post<Login>('https://localhost:5002/api/Logins', login);
  }

  deleteLogin(id: number): Observable<any> {
    return this.http.delete(`https://localhost:5002/api/Logins/${id}`);
  }

}
