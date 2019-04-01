import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatStepperModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatStepperModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatDialogModule,
    MatStepperModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
