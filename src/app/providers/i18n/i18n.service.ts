import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import en from '@assets/i18n/en.json';
import ru from '@assets/i18n/ru.json';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private language = signal(localStorage.getItem('lang') || 'en');

  private translations: Record<string, any> = { en, ru };

  constructor(private translate: TranslateService) {
    this.loadTranslations();
    this.translate.use(this.language());
  }

  setLanguage(lang: string) {
    if (!this.translations[lang]) return;

    this.language.set(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  getLanguage() {
    return this.language();
  }

  private loadTranslations() {
    Object.keys(this.translations).forEach((lang) => {
      this.translate.setTranslation(lang, this.translations[lang]);
    });
  }
}
