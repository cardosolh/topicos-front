import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loja } from './loja.interface';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {

  constructor(private http: HttpClient) {

  }
  getLojas(): Observable<any> {
    return this.http.get('https://painel-covid-api.herokuapp.com/lojas');
  }

  getLoja(id: number): Observable<any> {
    return this.http.get(`https://painel-covid-api.herokuapp.com/lojas/${id}`);
  }

  postLoja(loja: Loja): Observable<Loja> {
    return this.http.post<Loja>(`https://painel-covid-api.herokuapp.com/lojas`, loja);
  }

  getLojasInfectados(latitude: number, longitude: number, metros: number): Observable<any> {
    return this.http.get(`https://painel-covid-api.herokuapp.com/lojas/teste-covid/latitude/${latitude}/longitude/${longitude}/raio/${metros}`);
  }

}
