import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms.component';

@NgModule({
  declarations: [FarmsComponent],
  imports: [SharedModule, FarmsRoutingModule]
})
export class FarmsModule {}
