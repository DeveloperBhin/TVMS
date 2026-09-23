import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';

@NgModule({
  declarations: [DriversComponent],
  imports: [SharedModule, DriversRoutingModule]
})
export class FarmersModule {}
