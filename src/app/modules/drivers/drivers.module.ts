import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';
import { NewRequestComponent } from './pages/new_request/new_request.component';

@NgModule({
  declarations: [DriversComponent, NewRequestComponent],
  imports: [SharedModule, DriversRoutingModule]
})
export class DriversModule {}
