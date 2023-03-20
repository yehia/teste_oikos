import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { BadgeModule } from 'primeng/badge';

import { AtivosComponent } from './ativos/ativos.component';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { routing } from '../app-routing';

@NgModule({
  declarations: [
    AtivosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    BadgeModule,

    CurrencyMaskModule,

    routing
  ],
  exports: [
    AtivosComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class AtivosModule { }
