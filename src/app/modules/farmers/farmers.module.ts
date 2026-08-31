import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FarmersRoutingModule } from './farmers-routing.module';
import { FarmersComponent } from './farmers.component';

@NgModule({
  declarations: [FarmersComponent],
  imports: [SharedModule, FarmersRoutingModule]
})
export class FarmersModule {}
