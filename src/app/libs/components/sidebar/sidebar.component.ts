import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() opened = false;

  @Output() closeSidebar = new EventEmitter<void>();

  cashewExpanded = false;
  usersExpanded = false;
  settingsExpanded = false;

  @HostBinding('class.sidebar-open')
  get isOpen(): boolean {
    return this.opened;
  }

  toggleCashew(): void {
    this.cashewExpanded = !this.cashewExpanded;
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