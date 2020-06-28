import { Pessoa } from './pessoa.interface';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) {

  }

  getUsuarios(): Observable<any> {
    return this.http.get('https://painel-covid-api.herokuapp.com/usuarios');
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get(`https://painel-covid-api.herokuapp.com/usuarios/${id}`);
  }

  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`https://painel-covid-api.herokuapp.com/usuarios`, usuario);
  }

  getUsuariosInfectados(latitude: number, longitude: number, metros: number, soInfectados: boolean): Observable<any> {
    return this.http.get(`https://painel-covid-api.herokuapp.com/usuarios/${latitude}/${longitude}/raio/${metros}/soinfectados/${soInfectados}`);
  }

}
