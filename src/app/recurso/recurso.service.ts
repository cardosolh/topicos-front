import { Recurso } from './recurso.interface';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor(private http: HttpClient) {

  }
  getRecurso(): Observable<any> {
    return this.http.get('https://localhost:5002/api/Recursos/1/100');
  }

  postRecurso(recurso: Recurso): Observable<Recurso> {
    return this.http.post<Recurso>('https://localhost:5002/api/Recursos', recurso);
  }

  deleteRecurso(id: number): Observable<any> {
    return this.http.delete(`https://localhost:5002/api/Recursos/${id}`);
  }

}
