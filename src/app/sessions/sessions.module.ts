
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared';
import { TranslateModule } from '@ngx-translate/core';

import { SessionsRoutingModule } from './sessions-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    SessionsRoutingModule,
    TranslateModule
  ]
})
export class SessionsModule {}