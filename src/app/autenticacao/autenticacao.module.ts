import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TokenComponent } from './token/token.component';

import { routing } from '../app-routing';


@NgModule({
  declarations: [
    LoginComponent,
    TokenComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    LoginComponent,
    TokenComponent
  ]
})
export class AutenticacaoModule { }
