import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ozim-weather';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.setLanguage('en', 'en');
  }

  setLanguage(defaultlang: string, useLang: string): void {
    this.translate.setDefaultLang(defaultlang);
    // this.translate.use(useLang);
  }
}
