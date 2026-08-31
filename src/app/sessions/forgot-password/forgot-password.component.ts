import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  template: `
    <main class="min-h-full flex-center">
      <mat-card style="width: 100%; max-width: 420px;" class="p-4">
        <h2>Forgot Password</h2>
        <p class="text-muted">Password reset integration will connect to the backend reset-link endpoint.</p>
        <a routerLink="/auth/login">Back to login</a>
      </mat-card>
    </main>
  `
})
export class ForgotPasswordComponent {}
