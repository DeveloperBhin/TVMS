
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { DirectorHrComponent } from './director-hr.component';
import { DirectorHrRoutingModule } from './director-hr-routing.module';
@NgModule({
  declarations: [
    DirectorHrComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // TranslateModule,
    DirectorHrRoutingModule
  ]
})
export class DirectorHrModule {}