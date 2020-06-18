import { Pessoa } from './pessoa.interface';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) {

  }
  getPessoa(): Observable<any> {
    return this.http.get('https://localhost:5002/api/Pessoas/1/100');
  }

  postPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>('https://localhost:5002/api/Pessoas', pessoa);
  }

  deletePessoa(id: number): Observable<any> {
    return this.http.delete(`https://localhost:5002/api/Pessoas/${id}`);
  }

}
