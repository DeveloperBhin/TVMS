import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';

@NgModule({
  declarations: [NotificationsComponent],
  imports: [SharedModule, NotificationsRoutingModule]
})
export class NotificationsModule {}
