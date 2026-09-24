
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportOfficerComponent } from './transport-officer.component';
import { VehiclesComponent } from './pages/vehicle/vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: TransportOfficerComponent
  },
  {
    path: 'vehicle',
    component: VehiclesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportOfficerRoutingModule {}