import { HttpClient } from '@angular/common/http';
import { NewsRss } from './news-rss.interface';
import { Observable } from 'rxjs';
import { NoticiaService } from '../noticia.service';
import { Component, OnInit } from '@angular/core';
import { Noticia } from '../noticia.interface';

import * as xml2js from 'xml2js';

@Component({
  selector: 'app-noticia-lista',
  templateUrl: './noticia-lista.component.html',
  styleUrls: ['./noticia-lista.component.scss']
})
export class NoticiaListaComponent implements OnInit {

  response: Observable<Response>;

  RssData: NewsRss;
  constructor(private http: HttpClient, private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    console.log(this.response);
    this.response = this.noticiaService.getNoticia();
  }

  GetRssFeedData() {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text'
    };
    this.http
      .get<any>(proxyurl + 'https://news.google.com/rss/search?q=covid&hl=pt-BR&gl=BR&ceid=BR:pt', requestOptions)
      .subscribe(data => {
        const parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }


}
export interface IRssData { }
