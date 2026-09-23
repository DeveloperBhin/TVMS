import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() opened = false;
  @Output() closeSidebar = new EventEmitter<void>();

  vehiclesExpanded = true;
  maintenanceExpanded = false;
  reportsExpanded = false;
  usersExpanded = false;
  settingsExpanded = false;

  toggleVehicles(): void {
    this.vehiclesExpanded = !this.vehiclesExpanded;
  }

  toggleMaintenance(): void {
    this.maintenanceExpanded = !this.maintenanceExpanded;
  }

  toggleReports(): void {
    this.reportsExpanded = !this.reportsExpanded;
  }

  toggleUsers(): void {
    this.usersExpanded = !this.usersExpanded;
  }

  toggleSettings(): void {
    this.settingsExpanded = !this.settingsExpanded;
  }

  close(): void {
    this.closeSidebar.emit();
  }
}