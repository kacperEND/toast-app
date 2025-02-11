# Angular Toast Notification Demo

This project demonstrates a toast notification system built with Angular 18 using the latest features such as stand-alone components, signals, and modern dependency injection. It mimics key aspects of [ngx-toastr](https://github.com/scttcper/ngx-toastr) while offering a fully configurable, responsive, and modern solution.

## Features

- **Multiple Toast Types:** Supports `success`, `error`, `warning`, and `info` notifications.
- **Configuration Options:** Customize key settings:
  - **timeOut:** Duration (in milliseconds) for which a toast is displayed.
  - **positionClass:** Position of the toast container (e.g., `toast-top-right`, `toast-bottom-left`, etc.).
  - **showCloseButton:** Toggle the display of a close button on toasts.
- **Automatic DOM Insertion:** The toast container is automatically added to the DOM via a provider.
- **Responsive Design:** Uses `rem` units for scalable and accessible styling.
- **Animations:** Includes fade-in and fade-out animations for toast transitions.
- **Stand-Alone Components:** No dedicated Angular module is required.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Angular CLI](https://angular.io/cli) (v16+ recommended)

### Steps

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd toast-app
# toast-app
