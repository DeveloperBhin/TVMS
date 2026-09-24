
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CenterDirectorComponent } from './centerDirector.component';
import { CenterDirectorRoutingModule } from './centerDirector-routing.module';
import { ApprovalComponent } from './pages/approval/approval.component';
@NgModule({
  declarations: [
    CenterDirectorComponent,ApprovalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // TranslateModule,
    CenterDirectorRoutingModule
  ]
})
export class CenterDirectorModule {}