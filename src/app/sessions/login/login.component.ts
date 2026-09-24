import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import {
  catchError,
  of
} from 'rxjs';

import {
  ActionButton
} from '@shared';

import {
  AppSettings,
  AppSettingsService,
  AuthService,
  LoginRequest
} from '@core';


@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent
  implements OnInit {

  // ==========================================
  // FORM
  // ==========================================

  form!: FormGroup;


  // ==========================================
  // UI STATE
  // ==========================================

  isSubmitting = false;

  showPassword = false;

  errorMessage = '';

  showRegister = true;


  // ==========================================
  // SETTINGS
  // ==========================================

  utilityButtons: ActionButton[] = [];

  options: AppSettings;


  constructor(
    private fb: FormBuilder,

    private appSettings:
      AppSettingsService,

    private authService:
      AuthService,

    private router:
      Router
  ) {

    this.options =
      this.appSettings.getOptions();

  }


  ngOnInit(): void {

    this.buildForm();

    this.setActionButtons();

  }


  // ==========================================
  // BUILD FORM
  // ==========================================

  private buildForm(): void {

    this.form = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required
        ]
      ]

    });

  }


  // ==========================================
  // FORM CONTROLS
  // ==========================================

  get f() {

    return this.form.controls;

  }


  // ==========================================
  // LOGIN
  // ==========================================

  submit(): void {

    this.errorMessage = '';


    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }


    if (this.isSubmitting) {

      return;

    }


    const request: LoginRequest = {

      email:
        this.f['email'].value
          .trim()
          .toLowerCase(),

      password:
        this.f['password'].value

    };


    console.log(
      'LOGIN REQUEST:',
      {
        email: request.email
      }
    );


    this.isSubmitting = true;


    this.authService
      .login(request)
      .pipe(

        catchError(error => {

          console.error(
            'LOGIN ERROR:',
            error
          );


          this.isSubmitting = false;


          if (
            error.status === 401 ||
            error.status === 403
          ) {

            this.errorMessage =
              'AUTH.INVALID_CREDENTIALS';

          } else {

            this.errorMessage =
              'AUTH.LOGIN_FAILED';

          }


          return of(null);

        })

      )
      .subscribe(response => {

        this.isSubmitting = false;


        if (!response) {

          return;

        }


        console.log(
          'LOGIN SUCCESS:',
          response
        );


        this.navigateAfterLogin(
          response.user?.roles || []
        );

      });

  }


  // ==========================================
  // ROLE NAVIGATION
  // ==========================================

  private navigateAfterLogin(
    roles: string[]
  ): void {

    console.log(
      'USER ROLES:',
      roles
    );


    if (
      roles.includes('ROLE_DRIVER')
    ) {

      this.router.navigateByUrl(
        '/drivers'
      );

      return;

    }


    if (
      roles.includes(
        'ROLE_CENTER_SUPERVISOR'
      )
    ) {

      this.router.navigateByUrl(
        '/supervisor'
      );

      return;

    }


    if (
      roles.includes(
        'ROLE_CENTER_DIRECTOR'
      )
    ) {

      this.router.navigateByUrl(
        '/centerdirector'
      );

      return;

    }


    if (
      roles.includes(
        'ROLE_TRANSPORT_OFFICER'
      )
    ) {

      this.router.navigateByUrl(
        '/TO'
      );

      return;

    }


    if (
      roles.includes(
        'ROLE_ADMINISTRATION_MANAGER'
      )
    ) {

      this.router.navigateByUrl(
        '/AM'
      );

      return;

    }


    if (
      roles.includes(
        'ROLE_DIRECTOR_HR'
      )
    ) {

      this.router.navigateByUrl(
        '/DHRAM'
      );

      return;

    }


    // Admin / ROLE_USER / fallback

    this.router.navigateByUrl(
      '/dashboard'
    );

  }


  // ==========================================
  // SETTINGS
  // ==========================================

  updateOptions(
    options: AppSettings
  ): void {

    this.options = options;

    this.appSettings
      .setOptions(options);

  }


  // ==========================================
  // THEME + LANGUAGE
  // ==========================================

  setActionButtons(): void {

    this.utilityButtons = [

      // --------------------------------------
      // THEME
      // --------------------------------------

      {

        type: 'icon',

        iconMapper: () =>

          this.appSettings
            .getResolvedTheme() ===
          'dark'

            ? 'light_mode'

            : 'dark_mode',


        onClick: () => {

          const current =

            this.appSettings
              .getResolvedTheme();


          this.appSettings
            .setTheme(

              current === 'dark'

                ? 'light'

                : 'dark'

            );


          this.options =

            this.appSettings
              .getOptions();

        }

      },


      // --------------------------------------
      // LANGUAGE
      // --------------------------------------

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