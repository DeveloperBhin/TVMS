// import { NgModule } from '@angular/core';
// import { SharedModule } from '@shared';
// import { FarmsRoutingModule } from './farms-routing.module';
// import { FarmsComponent } from './farms.component';

// @NgModule({
//   declarations: [FarmsComponent],
//   imports: [SharedModule, FarmsRoutingModule]
// })
// export class FarmsModule {}

import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';

import { FarmsRoutingModule } from './farms-routing.module';

import { FarmsComponent } from './farms.component';
import { AddFarmComponent } from './add_farm/add_farm.component';
import { AddFarmSucessComponent } from './add_farm_sucess/add_farm_sucess.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
@NgModule({

  declarations: [
    FarmsComponent,
    AddFarmComponent,
    AddFarmSucessComponent,
    FarmDetailsComponent
  ],

  imports: [
    SharedModule,
    FarmsRoutingModule
  ]

})
export class FarmsModule {}