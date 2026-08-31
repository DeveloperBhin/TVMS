import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SprayingRoutingModule } from './spraying-routing.module';
import { SprayingComponent } from './spraying.component';

@NgModule({
  declarations: [SprayingComponent],
  imports: [SharedModule, SprayingRoutingModule]
})
export class SprayingModule {}
