import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [TopBarComponent, NavComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatDialogModule,
    TopBarComponent,
    NavComponent,
  ]
})
export class SharedModule { }
