import { AtivosComponent } from './ativos/ativos/ativos.component';
import { Routes, RouterModule, Route } from '@angular/router';

import { LoginComponent } from './autenticacao/login/login.component';
import { TokenComponent } from './autenticacao/token/token.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'token', component: TokenComponent },
  { path: 'ativos', component: AtivosComponent },
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(APP_ROUTES);
