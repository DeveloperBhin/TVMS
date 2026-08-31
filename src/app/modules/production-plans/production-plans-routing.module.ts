import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionPlansComponent } from './production-plans.component';

const routes: Routes = [
  { path: '', component: ProductionPlansComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionPlansRoutingModule {}
