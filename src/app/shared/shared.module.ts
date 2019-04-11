import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatStepperModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatStepperModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatStepperModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    ConfirmDialogComponent,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ]
})
export class SharedModule { }
