import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputManagementComponent } from './input-management.component';

const routes: Routes = [
  { path: '', component: InputManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputManagementRoutingModule {}
