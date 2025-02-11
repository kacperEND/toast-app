import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastItemComponent } from '../toast-item/toast-item.component';
import { ToastConfig } from '../../models/toast-config.model';
import { TOAST_CONFIG, ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule, ToastItemComponent],
  template: ` <div
    class="toast-container"
    [ngClass]="toastConfig.positionClass"
  >
  @for (toast of toastService.toasts(); track toast.id) {
  <app-toast-item
    [toast]="toast"
    (dismiss)="toastService.removeToast(toast.id)"
  ></app-toast-item>
}
  </div>`,
  styleUrl: './toast-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainerComponent {
  toastService = inject(ToastService);
  toastConfig: ToastConfig = inject(TOAST_CONFIG);
}
