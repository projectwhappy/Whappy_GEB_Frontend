import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    registerLocaleData(localeIt, 'it');
  }
}
