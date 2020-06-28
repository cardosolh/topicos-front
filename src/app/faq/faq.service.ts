import { Faq } from './faq.interface';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) {

  }
  getFaq(): Observable<any> {
    console.log('passei por aqui');
    return this.http.get('https://painel-covid-api.herokuapp.com/faq');
  }


}
