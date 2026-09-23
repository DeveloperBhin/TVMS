import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {
  CenterSupervisorComponent
} from './centerSupervisor.component';
import { VehiclesComponent } from './pages/vehicle/vehicle.component';
import { ApprovalComponent } from './pages/approval/approval.component';

const routes: Routes = [
  {path: '',component: CenterSupervisorComponent},
   {path: 'vehicle',component: VehiclesComponent },
   {path: 'requests',component:ApprovalComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class CenterSupervisorRoutingModule {}