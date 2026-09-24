
import { Component } from '@angular/core';

interface DashboardStat {
  labelKey: string;
  icon: string;
  value: number;
  footer?: string;
  footerKey?: string;
}

interface MaintenanceRequest {
  reference: string;
  serviceKey: string;
  vehicle: string;
  center: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

interface DashboardVehicle {
  registrationNumber: string;
  name: string;
  center: string;
  status: 'OPERATIONAL' | 'UNDER_SERVICE';
}

@Component({
  selector: 'app-center-director',
  templateUrl: './centerDirector.component.html',
  styleUrls: ['./centerDirector.component.scss']
})
export class CenterDirectorComponent {

  sidebarOpen = false;

  centerName = 'TARI Makutupora';

  // Sample data. Replace with API responses when available.
  stats: DashboardStat[] = [
    {
      labelKey: 'CENTER_DIRECTOR.TOTAL_VEHICLES',
      icon: 'local_shipping',
      value: 3
    },
    {
      labelKey: 'CENTER_DIRECTOR.OPERATIONAL',
      icon: 'check',
      value: 1,
      footer: '1/3'
    },
    {
      labelKey: 'CENTER_DIRECTOR.UNDER_SERVICE',
      icon: 'build',
      value: 0
    },
    {
      labelKey: 'CENTER_DIRECTOR.PENDING_REQUESTS',
      icon: 'inbox',
      value: 2,
      footerKey: 'CENTER_DIRECTOR.NEED_DECISION'
    }
  ];

  recentRequests: MaintenanceRequest[] = [
    {
      reference: 'REQ-1001',
      serviceKey: 'CENTER_DIRECTOR.ROUTINE_SERVICE',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      status: 'PENDING'
    },
    {
      reference: 'REQ-1002',
      serviceKey: 'CENTER_DIRECTOR.BREAKDOWN_REPAIR',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      status: 'APPROVED'
    },
    {
      reference: 'REQ-1003',
      serviceKey: 'CENTER_DIRECTOR.EMERGENCY_SERVICE',
      vehicle: 'T 174 QFR',
      center: 'TARI Makutupora',
      status: 'PENDING'
    }
  ];

  vehicles: DashboardVehicle[] = [
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

  getRequestStatusKey(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'CENTER_DIRECTOR.APPROVED';
      case 'REJECTED':
        return 'CENTER_DIRECTOR.REJECTED';
      default:
        return 'CENTER_DIRECTOR.PENDING';
    }
  }

  getVehicleStatusKey(status: string): string {
    return status === 'OPERATIONAL'
      ? 'CENTER_DIRECTOR.OPERATIONAL'
      : 'CENTER_DIRECTOR.UNDER_SERVICE';
  }

  downloadCenterReport(): void {
    const headers = [
      'Registration Number',
      'Vehicle',
      'Center',
      'Status'
    ];

    const rows = this.vehicles.map(vehicle => [
      vehicle.registrationNumber,
      vehicle.name,
      vehicle.center,
      vehicle.status
    ]);

    const csv = [headers, ...rows]
      .map(row =>
        row.map(value =>
          '"' + String(value).replace(/"/g, '""') + '"'
        ).join(',')
      )
      .join('\r\n');

    const blob = new Blob(
      ['\uFEFF', csv],
      { type: 'text/csv;charset=utf-8;' }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'TARI-Makutupora-Center-Report.csv';
    link.click();

    URL.revokeObjectURL(url);
  }
}