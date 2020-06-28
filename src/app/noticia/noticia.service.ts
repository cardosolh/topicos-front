import { Noticia } from './noticia.interface';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) {

  }
  getNoticia(): Observable<any> {
    return this.http.get('http://newsapi.org/v2/top-headlines?q=covid&country=br&apiKey=b50c72d4a24a4e7fb3092c358693912e');
  }

}
