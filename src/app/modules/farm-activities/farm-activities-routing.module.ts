import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmActivitiesComponent } from './farm-activities.component';

const routes: Routes = [
  { path: '', component: FarmActivitiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmActivitiesRoutingModule {}
