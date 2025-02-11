import { Injectable, InjectionToken, inject, signal } from '@angular/core';
import { Toast, ToastConfig } from '../models/toast-config.model';

export const TOAST_CONFIG = new InjectionToken<ToastConfig>('TOAST_CONFIG', {
  providedIn: 'root',
  factory: () => ({
    timeOut: 5000,
    positionClass: 'toast-top-right',
    showCloseButton: true,
  }),
});

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts = signal<Toast[]>([]);

  private toastIdCounter = 0;
  private config = inject(TOAST_CONFIG);

  private showInternal(
    message: string,
    type: Toast['type'],
    duration?: number
  ) {
    const effectiveDuration = duration ?? this.config.timeOut ?? 5000;
    const toast: Toast = {
      id: ++this.toastIdCounter,
      message,
      type,
    };
    this.toasts.update((current) => [toast, ...current]);

    setTimeout(() => this.removeToast(toast.id), effectiveDuration);
  }

  showSuccess(message: string, duration?: number) {
    this.showInternal(message, 'success', duration);
  }

  showError(message: string, duration?: number) {
    this.showInternal(message, 'error', duration);
  }

  showWarning(message: string, duration?: number) {
    this.showInternal(message, 'warning', duration);
  }

  showInfo(message: string, duration?: number) {
    this.showInternal(message, 'info', duration);
  }

  removeToast(id: number) {
    this.toasts.update((current) => current.filter((t) => t.id !== id));
  }
}
