import { Component } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Farmers', icon: 'groups', route: '/farmers' },
    { label: 'Farms', icon: 'agriculture', route: '/farms' },
    { label: 'Cashew Trees', icon: 'park', route: '/cashew-trees' },
    { label: 'Farm Activities', icon: 'task_alt', route: '/farm-activities' },
    { label: 'Production Plans', icon: 'event_note', route: '/production-plans' },
    { label: 'Inputs', icon: 'inventory_2', route: '/input-management' },
    { label: 'Diseases', icon: 'coronavirus', route: '/disease-management' },
    { label: 'Spraying', icon: 'water_drop', route: '/spraying' },
    { label: 'Harvesting', icon: 'grass', route: '/harvesting' },
    { label: 'Post Harvest', icon: 'warehouse', route: '/post-harvest' },
    { label: 'Production', icon: 'insights', route: '/production' },
    { label: 'Warehouses', icon: 'store', route: '/warehouses' },
    { label: 'Sales', icon: 'payments', route: '/sales' },
    { label: 'Reports', icon: 'assessment', route: '/reports' },
    { label: 'Notifications', icon: 'notifications', route: '/notifications' },
    { label: 'Users', icon: 'manage_accounts', route: '/users' },
    { label: 'Settings', icon: 'settings', route: '/settings' }
  ];

  constructor(public auth: AuthService) {}
}
