import {
  ApplicationRef,
  Injector,
  APP_INITIALIZER,
  Provider,
  createComponent,
  EnvironmentInjector,
} from '@angular/core';
import { ToastConfig } from './models/toast-config.model';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { TOAST_CONFIG } from './services/toast.service';

export function provideToastr(config: ToastConfig): Provider[] {
  return [
    { provide: TOAST_CONFIG, useValue: config },
    {
      provide: APP_INITIALIZER,
      useFactory: initToastContainer,
      multi: true,
      deps: [ApplicationRef, Injector],
    },
  ];
}

export function initToastContainer(appRef: ApplicationRef, injector: Injector) {
  return () => {
    const environmentInjector = injector.get(EnvironmentInjector);
    const container = createComponent(ToastContainerComponent, {
      environmentInjector,
    });
    appRef.attachView(container.hostView);
    const domElem = container.location.nativeElement as HTMLElement;
    document.body.appendChild(domElem);
  };
}
