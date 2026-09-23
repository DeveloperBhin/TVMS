import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import {
//   TranslateModule
// } from '@ngx-translate/core';

import {
  CenterSupervisorRoutingModule
} from './centerSupervisor-routing.module';

import {
  CenterSupervisorComponent
} from './centerSupervisor.component';
import { VehiclesComponent } from './pages/vehicle/vehicle.component';
import {SharedModule} from '@shared';
import { ApprovalComponent } from './pages/approval/approval.component';

@NgModule({
  declarations: [
    CenterSupervisorComponent,VehiclesComponent,ApprovalComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
        FormsModule,

    CenterSupervisorRoutingModule
  ]
})
export class CenterSupervisorModule {}