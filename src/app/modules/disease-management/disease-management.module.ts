import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DiseaseManagementRoutingModule } from './disease-management-routing.module';
import { DiseaseManagementComponent } from './disease-management.component';

@NgModule({
  declarations: [DiseaseManagementComponent],
  imports: [SharedModule, DiseaseManagementRoutingModule]
})
export class DiseaseManagementModule {}
