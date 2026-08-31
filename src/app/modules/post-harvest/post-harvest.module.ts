import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PostHarvestRoutingModule } from './post-harvest-routing.module';
import { PostHarvestComponent } from './post-harvest.component';

@NgModule({
  declarations: [PostHarvestComponent],
  imports: [SharedModule, PostHarvestRoutingModule]
})
export class PostHarvestModule {}
