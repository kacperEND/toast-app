import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from './core/toast/toast.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    ...provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      showCloseButton: true,
    })
  ],
};
