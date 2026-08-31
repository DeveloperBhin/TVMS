import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FarmActivitiesRoutingModule } from './farm-activities-routing.module';
import { FarmActivitiesComponent } from './farm-activities.component';

@NgModule({
  declarations: [FarmActivitiesComponent],
  imports: [SharedModule, FarmActivitiesRoutingModule]
})
export class FarmActivitiesModule {}
