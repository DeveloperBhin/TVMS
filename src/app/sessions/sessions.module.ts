import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SessionsRoutingModule } from './sessions-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    SharedModule,
    SessionsRoutingModule,
    TranslateModule
  ]
})
export class SessionsModule {}
