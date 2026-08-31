import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

import {
  ActionButton,
  FormParameters
} from '@shared';

import {
  AppSettings,
  AppSettingsService,
  AuthService,
  RegisterRequest
} from '@core';

import { registerFormFields } from './register-form-fields';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSubmitting = false;

  fp!: FormParameters<RegisterRequest>;

  utilityButtons: ActionButton[] = [];

  options = this.appSettings.getOptions();

  constructor(
    private appSettings: AppSettingsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setActionButtons();
    this.setFormParameters();
  }

  /**
   * Registration form configuration
   */
  setFormParameters(): void {
    this.fp = {
      fields: registerFormFields,
      showTitle: false,
      innerClass: 'p-0',
      onSubmit: value =>
        this.register(value as unknown as RegisterRequest)
    };
  }

  /**
   * Submit registration
   */
  register(payload: RegisterRequest): void {

    if (payload.password !== payload.confirmPassword) {
      window.alert('Passwords do not match.');
      return;
    }

    this.isSubmitting = true;

    this.authService.register(payload)
      .pipe(
        catchError(() => {
          this.isSubmitting = false;
          return of(null);
        })
      )
      .subscribe(response => {

        this.isSubmitting = false;

        if (!response) {
          window.alert('Registration failed.');
          return;
        }

        this.router.navigateByUrl('/dashboard');
      });
  }

  /**
   * Update application options
   */
  updateOptions(options: AppSettings): void {
    this.options = options;
    this.appSettings.setOptions(options);
  }

  /**
   * Theme and language buttons
   */
  setActionButtons(): void {

    this.utilityButtons = [

      // Theme switcher
      {
        type: 'icon',

        iconMapper: () =>
          this.appSettings.getResolvedTheme() === 'dark'
            ? 'light_mode'
            : 'dark_mode',

        onClick: () => {

          const current =
            this.appSettings.getResolvedTheme();

          this.appSettings.setTheme(
            current === 'dark'
              ? 'light'
              : 'dark'
          );

          this.options =
            this.appSettings.getOptions();
        }
      },

      // Language switcher
      {
        type: 'icon',
        icon: 'language',

        buttons: [
          {
            type: 'button',
            label: 'English',

            onClick: () => {

              this.appSettings
                .setLanguage('en');

              this.options =
                this.appSettings
                  .getOptions();
            }
          },

          {
            type: 'button',
            label: 'Kiswahili',

            onClick: () => {

              this.appSettings
                .setLanguage('sw');

              this.options =
                this.appSettings
                  .getOptions();
            }
          }
        ]
      }

    ];
  }
}