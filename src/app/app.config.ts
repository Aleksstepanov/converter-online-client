import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { router } from '@core/router/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    router,
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
};
