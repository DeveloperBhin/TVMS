import { Component } from '@angular/core';

interface CenterStat {
  icon: string;
  labelKey: string;
  value: number;
  footer?: string;
}

interface MaintenanceRequest {
  reference: string;
  vehicle: string;
  center: string;
  serviceKey: string;
  status: 'PENDING' | 'APPROVED';
}

interface CenterVehicle {
  registrationNumber: string;
  name: string;
  center: string;
  status: 'OPERATIONAL' | 'UNDER_SERVICE';
}

@Component({
  selector: 'app-centerSupervisor',
  templateUrl: './centerSupervisor.component.html',
  styleUrls: ['./centerSupervisor.component.scss']
})
export class CenterSupervisorComponent {

  sidebarOpen = false;

  centerName = 'TARI Makutupora';

  stats: CenterStat[] = [
    {
      icon: 'local_shipping',
      labelKey: 'CENTER_SUPERVISOR.TOTAL_VEHICLES',
      value: 3
    },
    {
      icon: 'check',
      labelKey: 'CENTER_SUPERVISOR.OPERATIONAL_VEHICLES',
      value: 1,
      footer: '1/3'
    },
    {
      icon: 'build',
      labelKey: 'CENTER_SUPERVISOR.OUT_OF_SERVICE',
      value: 0
    },
    {
      icon: 'inbox',
      labelKey: 'CENTER_SUPERVISOR.PENDING_REQUESTS',
      value: 2
    }
  ];

  recentRequests: MaintenanceRequest[] = [
    {
      reference: 'REQ-1001',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      serviceKey: 'CENTER_SUPERVISOR.ROUTINE_SERVICE',
      status: 'PENDING'
    },
    {
      reference: 'REQ-1002',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      serviceKey: 'CENTER_SUPERVISOR.BREAKDOWN_REPAIR',
      status: 'APPROVED'
    },
    {
      reference: 'REQ-1003',
      vehicle: 'T 174 QFR',
      center: 'TARI Makutupora',
      serviceKey: 'CENTER_SUPERVISOR.EMERGENCY_SERVICE',
      status: 'PENDING'
    }
  ];

  vehicles: CenterVehicle[] = [
    {
      registrationNumber: 'T 211 XUJ',
      name: 'Mitsubishi Pajero Sport',
      center: 'TARI Makutupora',
      status: 'OPERATIONAL'
    },
    {
      registrationNumber: 'T 248 EHB',
      name: 'Toyota Coaster (Basi)',
      center: 'TARI Makutupora',
      status: 'UNDER_SERVICE'
    },
    {
      registrationNumber: 'T 285 MWU',
      name: 'Toyota Land Cruiser Hardtop',
      center: 'TARI Makutupora',
      status: 'UNDER_SERVICE'
    }
  ];

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  downloadCenterReport(): void {
    console.log('Download center report:', this.centerName);

    // API/PDF implementation will be connected here later.
  }

  getRequestStatusKey(
    status: MaintenanceRequest['status']
  ): string {
    switch (status) {
      case 'APPROVED':
        return 'CENTER_SUPERVISOR.APPROVED';

      case 'PENDING':
      default:
        return 'CENTER_SUPERVISOR.PENDING';
    }
  }

  getVehicleStatusKey(
    status: CenterVehicle['status']
  ): string {
    switch (status) {
      case 'OPERATIONAL':
        return 'CENTER_SUPERVISOR.OPERATIONAL';

      case 'UNDER_SERVICE':
      default:
        return 'CENTER_SUPERVISOR.UNDER_SERVICE';
    }
  }
}