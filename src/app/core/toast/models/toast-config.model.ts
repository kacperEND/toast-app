export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

export interface ToastConfig {
  timeOut?: number;
  positionClass?:
    | 'toast-top-right'
    | 'toast-top-left'
    | 'toast-bottom-right'
    | 'toast-bottom-left';
  showCloseButton?: boolean;
}
