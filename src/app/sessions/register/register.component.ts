import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { FormParameters } from '@shared';
import { AuthService, RegisterRequest } from '@core';
import { registerFormFields } from './register-form-fields';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fp!: FormParameters<RegisterRequest>;
  isSubmitting = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fp = {
      fields: registerFormFields,
      showTitle: false,
      innerClass: 'p-0',
      onSubmit: value => this.register(value as unknown as RegisterRequest)
    };
  }

  register(payload: RegisterRequest): void {
    if (payload.password !== payload.confirmPassword) {
      window.alert('Passwords do not match.');
      return;
    }

    this.isSubmitting = true;

    this.authService.register(payload)
      .pipe(catchError(() => {
        this.isSubmitting = false;
        return of(null);
      }))
      .subscribe(response => {
        this.isSubmitting = false;
        if (!response) {
          window.alert('Registration failed.');
          return;
        }
        this.router.navigateByUrl('/dashboard');
      });
  }
}
