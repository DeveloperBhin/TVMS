
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorHrComponent } from './director-hr.component';
const routes: Routes = [
  {
    path: '',
    component: DirectorHrComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorHrRoutingModule {}