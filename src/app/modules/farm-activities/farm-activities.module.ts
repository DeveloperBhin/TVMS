import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FarmActivitiesRoutingModule } from './farm-activities-routing.module';
import { FarmActivitiesComponent } from './farm-activities.component';

import { SharedModule } from '../../shared/shared.module';
import { AddActivityComponent } from './pages/add-activity/add-activity.component';
import { AddActivitySucessComponent } from './pages/add_activity_sucess/add_activity_sucess-form-fields';


@NgModule({
  declarations: [
    FarmActivitiesComponent,
    AddActivityComponent,
    AddActivitySucessComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FarmActivitiesRoutingModule
  ]
})
export class FarmActivitiesModule {}