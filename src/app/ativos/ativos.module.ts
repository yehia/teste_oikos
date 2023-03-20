import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

import { AtivosComponent } from './ativos/ativos.component';

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
    DropdownModule
  ],
  exports: [
    AtivosComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class AtivosModule { }
