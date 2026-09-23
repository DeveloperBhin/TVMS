import { Component } from '@angular/core';

@Component({
  selector: 'app-farmers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']

})
export class DriversComponent {

   sidebarOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
