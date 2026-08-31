import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  template: `
    <main class="min-h-full flex-center">
      <mat-card style="width: 100%; max-width: 420px;" class="p-4">
        <h2>Reset Password</h2>
        <p class="text-muted">Connect this page to the backend reset-password endpoint.</p>
      </mat-card>
    </main>
  `
})
export class ResetPasswordComponent {}
