import { Component, inject } from '@angular/core';
import { ToastService } from './core/toast/services/toast.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  toastService = inject(ToastService);

  showSuccess() {
    this.toastService.showSuccess('Operation completed successfully!');
  }

  showError() {
    this.toastService.showError('An error has occurred!');
  }

  showWarning() {
    this.toastService.showWarning('Warning! Check the entered data.');
  }

  showInfo() {
    this.toastService.showInfo('Information: operation in progress.');
  }
}
