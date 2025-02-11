import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  input,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate } from '@angular/animations';
import { Toast, ToastConfig } from '../../models/toast-config.model';
import { TOAST_CONFIG } from '../../services/toast.service';

@Component({
  selector: 'app-toast-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <div class="toast" [ngClass]="toastClass()" @fade>
      <span class="message">{{ toast().message }}</span>

      @if (toastConfig.showCloseButton) {
      <button mat-icon-button class="close-btn" (click)="dismiss.emit()">
        <mat-icon>close</mat-icon>
      </button>
      }
    </div>
  `,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateY(-20px)' })
        ),
      ]),
    ]),
  ],
  styleUrl: './toast-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastItemComponent {
  toast = input.required<Toast>();
  @Output() dismiss = new EventEmitter<void>();

  toastConfig: ToastConfig = inject(TOAST_CONFIG);

  toastClass = computed(
    () =>
      ({
        success: 'toast-success',
        error: 'toast-error',
        warning: 'toast-warning',
        info: 'toast-info',
      }[this.toast().type] || 'toast-info')
  );
}
