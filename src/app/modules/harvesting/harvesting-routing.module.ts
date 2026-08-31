import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarvestingComponent } from './harvesting.component';

const routes: Routes = [
  { path: '', component: HarvestingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarvestingRoutingModule {}
