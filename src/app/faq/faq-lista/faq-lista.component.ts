import { Observable } from 'rxjs';
import { FaqService } from '../faq.service';
import { Component, OnInit } from '@angular/core';
import { Faq } from '../faq.interface';
@Component({
  selector: 'app-faq-lista',
  templateUrl: './faq-lista.component.html',
  styleUrls: ['./faq-lista.component.scss']
})
export class FaqListaComponent implements OnInit {

  faq: Observable<Faq>;
  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    console.log('passou no on init');
    console.log(this.faq);
    this.faq = this.faqService.getFaq();
  }

}
