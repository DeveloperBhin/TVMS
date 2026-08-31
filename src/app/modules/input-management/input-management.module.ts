import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { InputManagementRoutingModule } from './input-management-routing.module';
import { InputManagementComponent } from './input-management.component';

@NgModule({
  declarations: [InputManagementComponent],
  imports: [SharedModule, InputManagementRoutingModule]
})
export class InputManagementModule {}
