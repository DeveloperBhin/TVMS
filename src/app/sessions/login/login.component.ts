
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = false;
  showPassword = false;
  errorMessage = '';

  form = this.fb.nonNullable.group({
    email: [
      '',
      [Validators.required, Validators.email]
    ],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  get f() {
    return this.form.controls;
  }

  submit(): void {
    this.errorMessage = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.auth.login({
      email: this.f.email.value.trim().toLowerCase(),
      password: this.f.password.value
    }).subscribe({
      next: response => {
        this.loading = false;

        const roles = response.user.roles;

        if (roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin/dashboard']);
        } else if (roles.includes('ROLE_DRIVER')) {
          this.router.navigate(['/driver/dashboard']);
        } else if (
          roles.includes('ROLE_CENTER_DIRECTOR')
        ) {
          this.router.navigate(['/center-director']);
        } else if (
          roles.includes('ROLE_CENTER_SUPERVISOR')
        ) {
          this.router.navigate(['/center-supervisor']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },

      error: error => {
        this.loading = false;

        this.errorMessage =
          error.status === 401
            ? 'AUTH.INVALID_CREDENTIALS'
            : 'AUTH.LOGIN_FAILED';
      }
    });
  }
}