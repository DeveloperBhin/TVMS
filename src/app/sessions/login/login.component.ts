import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ActionButton, ANIMATION_ICON, FormParameters } from '@shared';
import { AppSettings, AppSettingsService, AuthService, LoginRequest } from '@core';
import { loginFormFields } from './login-form-fields';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  animation = 'move-left';
  isSubmitting = false;
  showRegister = true;
  fp!: FormParameters<LoginRequest>;
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

  setFormParameters(): void {
    this.fp = {
      fields: loginFormFields,
      showTitle: false,
      innerClass: 'p-0',
      onSubmit: value => this.onSubmit(value as unknown as LoginRequest)
    };
  }

  onSubmit(formValue: LoginRequest): void {
    this.isSubmitting = true;

    this.authService.login(formValue)
      .pipe(catchError(() => {
        this.isSubmitting = false;
        return of(null);
      }))
      .subscribe(response => {
        this.isSubmitting = false;

        if (!response) {
          window.alert('Wrong Username or Password.');
          return;
        }

        this.router.navigateByUrl('/dashboard');
      });
  }

  updateOptions(options: AppSettings): void {
    this.options = options;
    this.appSettings.setOptions(options);
  }

setActionButtons(): void {

  this.utilityButtons = [

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
