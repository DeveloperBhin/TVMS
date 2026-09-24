
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CenterDirectorComponent } from './centerDirector.component';
import { ApprovalComponent } from './pages/approval/approval.component';

const routes: Routes = [
  {
    path: '',
    component: CenterDirectorComponent
  },
   {
    path: 'requests',
    component: ApprovalComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterDirectorRoutingModule {}