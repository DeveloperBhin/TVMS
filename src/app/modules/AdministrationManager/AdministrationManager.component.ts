
import { Component } from '@angular/core';

type RequestStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
type VehicleStatus = 'OPERATIONAL' | 'UNDER_SERVICE';

interface DashboardStat {
  icon: string;
  labelKey: string;
  value: number;
  footerKey?: string;
}

interface RecentRequest {
  reference: string;
  serviceKey: string;
  vehicle: string;
  center: string;
  status: RequestStatus;
}

interface DashboardVehicle {
  registrationNumber: string;
  name: string;
  center: string;
  status: VehicleStatus;
}

@Component({
  selector: 'app-administration-manager',
  templateUrl: './AdministrationManager.component.html',
  styleUrls: ['./AdministrationManager.component.scss']
})
export class AdministrationManagerComponent {

  sidebarOpen = false;

  // Sample statistics from the dashboard design.
  stats: DashboardStat[] = [
    {
      icon: 'apartment',
      labelKey: 'ADMIN_MANAGER.TOTAL_CENTERS',
      value: 21
    },
    {
      icon: 'local_shipping',
      labelKey: 'ADMIN_MANAGER.TOTAL_VEHICLES',
      value: 63
    },
    {
      icon: 'build',
      labelKey: 'ADMIN_MANAGER.UNDER_SERVICE',
      value: 3
    },
    {
      icon: 'inbox',
      labelKey: 'ADMIN_MANAGER.PENDING_REQUESTS',
      value: 4,
      footerKey: 'ADMIN_MANAGER.NEED_DECISION'
    }
  ];

  recentRequests: RecentRequest[] = [
    {
      reference: 'REQ-1001',
      serviceKey: 'ADMIN_MANAGER.ROUTINE_SERVICE',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      status: 'PENDING'
    },
    {
      reference: 'REQ-1002',
      serviceKey: 'ADMIN_MANAGER.BREAKDOWN_REPAIR',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      status: 'APPROVED'
    },
    {
      reference: 'REQ-1003',
      serviceKey: 'ADMIN_MANAGER.EMERGENCY_SERVICE',
      vehicle: 'T 174 QFR',
      center: 'TARI Makutupora',
      status: 'PENDING'
    },
    {
      reference: 'REQ-1004',
      serviceKey: 'ADMIN_MANAGER.ROUTINE_SERVICE',
      vehicle: 'T 285 MWU',
      center: 'TARI Naliendele',
      status: 'REJECTED'
    },
    {
      reference: 'REQ-2001',
      serviceKey: 'ADMIN_MANAGER.BREAKDOWN_REPAIR',
      vehicle: 'T 137 HSY',
      center: 'TARI HQ',
      status: 'PENDING'
    },
    {
      reference: 'REQ-2002',
      serviceKey: 'ADMIN_MANAGER.ROUTINE_SERVICE',
      vehicle: 'T 137 HSY',
      center: 'TARI HQ',
      status: 'PENDING'
    }
  ];

  vehicles: DashboardVehicle[] = [
    {
      registrationNumber: 'T 137 HSY',
      name: 'Toyota Hilux Double Cabin',
      center: 'TARI HQ',
      status: 'OPERATIONAL'
    },
    {
      registrationNumber: 'T 174 QFR',
      name: 'Toyota Hiace (Noah)',
      center: 'TARI HQ',
      status: 'OPERATIONAL'
    }
  ];

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  getRequestStatusKey(status: RequestStatus): string {
    const keys: Record<RequestStatus, string> = {
      PENDING: 'ADMIN_MANAGER.STATUS_PENDING',
      APPROVED: 'ADMIN_MANAGER.STATUS_APPROVED',
      REJECTED: 'ADMIN_MANAGER.STATUS_REJECTED'
    };

    return keys[status];
  }

  getVehicleStatusKey(status: VehicleStatus): string {
    const keys: Record<VehicleStatus, string> = {
      OPERATIONAL: 'ADMIN_MANAGER.STATUS_OPERATIONAL',
      UNDER_SERVICE: 'ADMIN_MANAGER.STATUS_UNDER_SERVICE'
    };

    return keys[status];
  }

  downloadAllCentersReport(): void {
    const rows = [
      ['TARI-VMS Administration Manager Report'],
      ['Metric', 'Value'],
      ...this.stats.map(stat => [stat.labelKey, stat.value]),
      [],
      ['Request Reference', 'Vehicle', 'Center', 'Status'],
      ...this.recentRequests.map(request => [
        request.reference,
        request.vehicle,
        request.center,
        request.status
      ]),
      [],
      ['Vehicle', 'Model', 'Center', 'Status'],
      ...this.vehicles.map(vehicle => [
        vehicle.registrationNumber,
        vehicle.name,
        vehicle.center,
        vehicle.status
      ])
    ];

    const csv = rows
      .map(row =>
        row.map(value => {
          const text = String(value ?? '');
          return `"${text.replace(/"/g, '""')}"`;
        }).join(',')
      )
      .join('\r\n');

    const blob = new Blob(
      ['\uFEFF', csv],
      { type: 'text/csv;charset=utf-8;' }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'TARI-VMS-All-Centers-Report.csv';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }
}