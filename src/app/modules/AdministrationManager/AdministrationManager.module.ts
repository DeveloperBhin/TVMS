
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { AdministrationManagerComponent } from './AdministrationManager.component';
import { CentersComponent } from './pages/centers/centers.component';
import { AdministrationManagerRoutingModule } from './AdministrationManager-routing.module';
@NgModule({
  declarations: [
    AdministrationManagerComponent,CentersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // TranslateModule,
    AdministrationManagerRoutingModule
  ]
})
export class AdministrationManagerModule {}