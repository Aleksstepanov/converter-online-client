import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routerProvider } from './providers/router/router.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    routerProvider,
  ],
};
