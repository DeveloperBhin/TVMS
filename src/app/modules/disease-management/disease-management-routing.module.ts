import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiseaseManagementComponent } from './disease-management.component';

const routes: Routes = [
  { path: '', component: DiseaseManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiseaseManagementRoutingModule {}
