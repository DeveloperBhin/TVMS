
import { Component } from '@angular/core';

type RequestStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED';

type VehicleStatus =
  | 'OPERATIONAL'
  | 'UNDER_SERVICE';

interface DashboardStat {
  icon: string;
  labelKey: string;
  value: number;
  footer?: string;
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
  selector: 'app-transport-officer',
  templateUrl: './transport-officer.component.html',
  styleUrls: ['./transport-officer.component.scss']
})
export class TransportOfficerComponent {

  sidebarOpen = false;

  centerName = 'Makao Makuu';

  stats: DashboardStat[] = [
    {
      icon: 'apartment',
      labelKey: 'TRANSPORT_OFFICER.TOTAL_CENTERS',
      value: 21
    },
    {
      icon: 'local_shipping',
      labelKey: 'TRANSPORT_OFFICER.TOTAL_VEHICLES',
      value: 63
    },
    {
      icon: 'build',
      labelKey: 'TRANSPORT_OFFICER.OUT_OF_SERVICE',
      value: 3
    },
    {
      icon: 'inbox',
      labelKey: 'TRANSPORT_OFFICER.PENDING_REQUESTS',
      value: 4,
      footerKey: 'TRANSPORT_OFFICER.AWAITING_DECISION'
    }
  ];

  recentRequests: RecentRequest[] = [
    {
      reference: 'REQ-1001',
      serviceKey: 'TRANSPORT_OFFICER.ROUTINE_SERVICE',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      status: 'PENDING'
    },
    {
      reference: 'REQ-1002',
      serviceKey: 'TRANSPORT_OFFICER.BREAKDOWN_REPAIR',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      status: 'APPROVED'
    },
    {
      reference: 'REQ-1003',
      serviceKey: 'TRANSPORT_OFFICER.EMERGENCY_SERVICE',
      vehicle: 'T 174 QFR',
      center: 'TARI Makutupora',
      status: 'PENDING'
    },
    {
      reference: 'REQ-1004',
      serviceKey: 'TRANSPORT_OFFICER.ROUTINE_SERVICE',
      vehicle: 'T 285 MWU',
      center: 'TARI Naliendele',
      status: 'REJECTED'
    },
    {
      reference: 'REQ-2001',
      serviceKey: 'TRANSPORT_OFFICER.BREAKDOWN_REPAIR',
      vehicle: 'T 137 HSY',
      center: 'TARI HQ',
      status: 'PENDING'
    },
    {
      reference: 'REQ-2002',
      serviceKey: 'TRANSPORT_OFFICER.ROUTINE_SERVICE',
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
    switch (status) {
      case 'APPROVED':
        return 'TRANSPORT_OFFICER.APPROVED';
      case 'REJECTED':
        return 'TRANSPORT_OFFICER.REJECTED';
      default:
        return 'TRANSPORT_OFFICER.PENDING';
    }
  }

  getVehicleStatusKey(status: VehicleStatus): string {
    return status === 'OPERATIONAL'
      ? 'TRANSPORT_OFFICER.OPERATIONAL'
      : 'TRANSPORT_OFFICER.UNDER_SERVICE';
  }

  downloadNationalReport(): void {
    const rows: (string | number)[][] = [
      ['TARI-VMS Transport Officer Report'],
      ['Office', this.centerName],
      [],
      ['Statistic', 'Value'],
      ...this.stats.map(stat => [
        stat.labelKey,
        stat.value
      ]),
      [],
      [
        'Request Reference',
        'Service',
        'Vehicle',
        'Center',
        'Status'
      ],
      ...this.recentRequests.map(request => [
        request.reference,
        request.serviceKey,
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
          return '"' + text.replace(/"/g, '""') + '"';
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
    link.download = 'TARI-VMS-National-Report.csv';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }
}