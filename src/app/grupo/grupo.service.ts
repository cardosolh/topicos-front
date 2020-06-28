import { UnidadeSaude } from './unidadeSaude.interface';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) {

  }
  getUnidadesSaude(): Observable<any> {
    return this.http.get('https://painel-covid-api.herokuapp.com/unidades-saude');
  }

  getUnidadeSaude(id: number): Observable<any> {
    return this.http.get(`https://painel-covid-api.herokuapp.com/unidades-saude/${id}`);
  }

  postUnidadeSaude(unidadeSaude: UnidadeSaude): Observable<UnidadeSaude> {
    return this.http.post<UnidadeSaude>(`https://painel-covid-api.herokuapp.com/unidades-saude`, unidadeSaude);
  }

  getUnidadesSaudeComTestes(latitude: number, longitude: number, metros: number): Observable<any> {
    return this.http.get(`https://painel-covid-api.herokuapp.com/unidades-saude/teste-covid/latitude/${latitude}/longitude/${longitude}/raio/${metros}`);
  }

  getUsuariosInfectados(latitude: number, longitude: number, metros: number, soInfectados: boolean): Observable<any> {
    return this.http.get(`https://painel-covid-api.herokuapp.com/usuarios/${latitude}/${longitude}/raio/${metros}/soinfectados/${soInfectados}`);
  }


}
