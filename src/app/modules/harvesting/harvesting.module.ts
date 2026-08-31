import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { HarvestingRoutingModule } from './harvesting-routing.module';
import { HarvestingComponent } from './harvesting.component';

@NgModule({
  declarations: [HarvestingComponent],
  imports: [SharedModule, HarvestingRoutingModule]
})
export class HarvestingModule {}
