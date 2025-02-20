import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { router } from '@core/router/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    router,
  ],
};
