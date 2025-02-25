import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { router } from '@core/router/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    router,
    provideHttpClient(),
  ],
};
