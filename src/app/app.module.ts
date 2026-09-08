import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from '@shared';
import { environment } from '@env/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { AuthInterceptor } from './core/authentication/auth.interceptor';
import { farmReducer } from './store/farms/farm.reducer';
import { FarmEffects } from './store/farms/farm.effects';
import { HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';

import {
  TranslateHttpLoader
} from '@ngx-translate/http-loader';
// import { HeaderComponent } from './libs/components/header/header.component';
// import { SidebarComponent } from './libs/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    // HeaderComponent,
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({
      farms: farmReducer
    }),
    EffectsModule.forRoot([
      FarmEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AppRoutingModule,
      TranslateModule.forRoot({
    defaultLanguage: 'en',

    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}





export function HttpLoaderFactory(
  http: HttpClient
): TranslateHttpLoader {

  return new TranslateHttpLoader(
    http,
    './assets/i18n/',
    '.json'
  );
}