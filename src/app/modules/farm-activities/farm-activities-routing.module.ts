import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmActivitiesComponent } from './farm-activities.component';
import { AddActivityComponent } from './pages/add-activity/add-activity.component';
import { AddActivitySucessComponent }
  from './pages/add_activity_sucess/add_activity_sucess.component';
  const routes: Routes = [
  { path: '', component: FarmActivitiesComponent },
  { path: 'add-activity', component: AddActivityComponent },
  {path: 'add-activity-sucess', component:AddActivitySucessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmActivitiesRoutingModule {}
