import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ProductionRoutingModule } from './production-routing.module';
import { ProductionComponent } from './production.component';

@NgModule({
  declarations: [ProductionComponent],
  imports: [SharedModule, ProductionRoutingModule]
})
export class ProductionModule {}
