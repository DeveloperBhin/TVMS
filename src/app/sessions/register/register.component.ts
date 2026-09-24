
import {
  Component,
  OnInit
} from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { AuthService } from '../../core/services/auth.service';
import { RegistrationOptionsService } from '../../core/services/registrations-options.service';

import {
  RoleOption,
  CenterOption,
  RegisterRequest
} from '../../core/models/auth.models';

function passwordsMatch(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;

  return password === confirm
    ? null
    : { passwordMismatch: true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  roles: RoleOption[] = [];
  centers: CenterOption[] = [];

  loading = false;
  loadingOptions = false;
  showPassword = false;
  showConfirmPassword = false;

  errorMessage = '';
  optionsError = '';

  form = this.fb.nonNullable.group(
    {
      fullName: ['', Validators.required],

      email: [
        '',
        [Validators.required, Validators.email]
      ],

      phoneNumber: ['', Validators.required],

      staffId: ['', Validators.required],

      centerId: [
        0,
        [Validators.required, Validators.min(1)]
      ],

      requestedRoleId: [
        0,
        [Validators.required, Validators.min(1)]
      ],

      driverLicenceNumber: [''],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],

      confirmPassword: [
        '',
        Validators.required
      ]
    },
    { validators: passwordsMatch }
  );

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private options: RegistrationOptionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadOptions();
  }

  get f() {
    return this.form.controls;
  }

  get selectedRole(): RoleOption | undefined {
    return this.roles.find(
      role =>
        role.id === this.f.requestedRoleId.value
    );
  }

  get isDriver(): boolean {
    return this.selectedRole?.name === 'ROLE_DRIVER';
  }

  loadOptions(): void {
    this.loadingOptions = true;
    this.optionsError = '';

    forkJoin({
      roles: this.options.getRoles(),
      centers: this.options.getCenters()
    }).subscribe({
      next: result => {
        this.roles = result.roles;
        this.centers = result.centers;
        this.loadingOptions = false;
      },

      error: error => {
        console.error(error);

        this.optionsError =
          'AUTH.OPTIONS_LOAD_FAILED';

        this.loadingOptions = false;
      }
    });
  }

  submit(): void {
    this.errorMessage = '';

    if (this.form.invalid || this.loadingOptions) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    const request: RegisterRequest = {
      fullName: value.fullName.trim(),
      email: value.email.trim().toLowerCase(),
      phoneNumber: value.phoneNumber.trim(),
      staffId: value.staffId.trim(),
      centerId: value.centerId,
      requestedRoleId: value.requestedRoleId,
      driverLicenceNumber: this.isDriver
        ? value.driverLicenceNumber.trim()
        : undefined,
      password: value.password
    };

    this.loading = true;

    this.auth.register(request).subscribe({
      next: () => {
        this.loading = false;

        // Newly registered users only have ROLE_USER.
        this.router.navigate(['/dashboard']);
      },

      error: error => {
        this.loading = false;

        this.errorMessage =
          error.status === 409
            ? 'AUTH.EMAIL_EXISTS'
            : 'AUTH.REGISTRATION_FAILED';
      }
    });
  }
}