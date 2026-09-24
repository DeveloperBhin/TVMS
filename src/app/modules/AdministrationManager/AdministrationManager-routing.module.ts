
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationManagerComponent } from './AdministrationManager.component';
import { CentersComponent } from './pages/centers/centers.component';
const routes: Routes = [
  {
    path: '',
    component: AdministrationManagerComponent
  },
  {
    path: 'summary',
    component: CentersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationManagerRoutingModule {}