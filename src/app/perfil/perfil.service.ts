import { Perfil } from './perfil.interface';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) {

  }
  getPerfil(): Observable<any> {
    return this.http.get('https://localhost:5002/api/Perfis/1/100');
  }

  postPerfil(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>('https://localhost:5002/api/Perfis', perfil);
  }

  deletePerfil(id: number): Observable<any> {
    return this.http.delete(`https://localhost:5002/api/Perfis/${id}`);
  }

}
