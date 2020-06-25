import { Anotacao } from './anotacao.interface';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {

  constructor(private http: HttpClient) {

  }
  getAnotacao(): Observable<any> {
    return this.http.get('https://localhost:5002/api/Anotacoes/1/100');
  }
  postAnotacao(anotacao: Anotacao): Observable<Anotacao> {

    return this.http.post<Anotacao>('https://localhost:5002/api/Anotacoes', anotacao);
  }

  deleteAnotacao(id: number): Observable<any> {
    return this.http.delete(`https://localhost:5002/api/Anotacoes/${id}`);
  }

}
