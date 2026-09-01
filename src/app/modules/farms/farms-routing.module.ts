import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmsComponent } from './farms.component';
import { AddFarmComponent } from './add_farm/add_farm.component';
import { AddFarmSucessComponent } from './add_farm_sucess/add_farm_sucess.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';

const routes: Routes = [

  // Farm dashboard
  {
    path: '',
    component: FarmsComponent
  },

  // Add farm
  {
    path: 'add',
    component: AddFarmComponent
  },
  {
    path: 'add/success',
    component: AddFarmSucessComponent
  },
   {
    path: ':id',
    component: FarmDetailsComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class FarmsRoutingModule {}