import { LoginFormularioComponent } from './login-formulario/login-formulario.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginListaComponent } from './login-lista/login-lista.component';


import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [LoginListaComponent, LoginFormularioComponent],
  imports: [
    CommonModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule,
    MatListModule,
    MatIconModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
