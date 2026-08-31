import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { WarehousesRoutingModule } from './warehouses-routing.module';
import { WarehousesComponent } from './warehouses.component';

@NgModule({
  declarations: [WarehousesComponent],
  imports: [SharedModule, WarehousesRoutingModule]
})
export class WarehousesModule {}
