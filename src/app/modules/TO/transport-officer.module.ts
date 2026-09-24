
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'src/app/shared/shared.module';

// import { CenterDirectorComponent } from './centerDirector.component';
// import { CenterDirectorRoutingModule } from './centerDirector-routing.module';
import { TransportOfficerComponent } from './transport-officer.component';
import { VehiclesComponent } from './pages/vehicle/vehicle.component';
import { TransportOfficerRoutingModule } from './transport-officer-routing.module';
@NgModule({
  declarations: [
    TransportOfficerComponent,VehiclesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // TranslateModule,
    TransportOfficerRoutingModule
  ]
})
export class TransportOfficerModule {}