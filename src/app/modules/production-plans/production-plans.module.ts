import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ProductionPlansRoutingModule } from './production-plans-routing.module';
import { ProductionPlansComponent } from './production-plans.component';

@NgModule({
  declarations: [ProductionPlansComponent],
  imports: [SharedModule, ProductionPlansRoutingModule]
})
export class ProductionPlansModule {}
