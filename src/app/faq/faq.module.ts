import { FaqRoutingModule } from './faq-routing.module';
import { FaqListaComponent } from './faq-lista/faq-lista.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FaqListaComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    FaqRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class FaqModule { }
