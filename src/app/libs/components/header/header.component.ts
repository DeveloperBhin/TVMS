import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

import {
  AppSettings,
  AppSettingsService
} from '@core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  menuToggle = new EventEmitter<void>();


  // Current application settings
  options: AppSettings;


  // Header action buttons
  utilityButtons: any[] = [];


  constructor(
    private appSettings: AppSettingsService
  ) {
    this.options =
      this.appSettings.getOptions();
  }


  ngOnInit(): void {
    this.setActionButtons();
  }


  // =========================================
  // UPDATE APPLICATION SETTINGS
  // =========================================
  updateOptions(
    options: AppSettings
  ): void {

    this.options = options;

    this.appSettings.setOptions(
      options
    );

  }


  // =========================================
  // HEADER ACTION BUTTONS
  // =========================================
  setActionButtons(): void {

    this.utilityButtons = [

      // =====================================
      // THEME
      // =====================================
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


      // =====================================
      // LANGUAGE
      // =====================================
      {
        type: 'icon',

        icon: 'language',

        buttons: [

          // ENGLISH
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


          // KISWAHILI
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


  // =========================================
  // SIDEBAR MENU
  // =========================================
  toggleMenu(): void {

    this.menuToggle.emit();

  }

}