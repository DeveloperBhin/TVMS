
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

/* =========================================
   TYPES
========================================= */

type RequestStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED';

type VehicleStatus =
  | 'OPERATIONAL'
  | 'UNDER_SERVICE'
  | 'INACTIVE';

interface DashboardStat {
  icon: string;
  labelKey: string;
  value: number;
  footerKey?: string;
}

interface RecentRequest {
  id: number;
  reference: string;
  serviceKey: string;
  vehicle: string;
  center: string;
  status: RequestStatus;
  requestedAt?: string;
}

interface DashboardVehicle {
  id: number;
  registrationNumber: string;
  name: string;
  center: string;
  status: VehicleStatus;
  checkNumber?: string;
}

/* =========================================
   COMPONENT
========================================= */

@Component({
  selector: 'app-director-hr',
  templateUrl: './director-hr.component.html',
  styleUrls: ['./director-hr.component.scss']
})
export class DirectorHrComponent
  implements OnInit, OnDestroy {

  /* =======================================
     SIDEBAR
  ======================================= */

  sidebarOpen = false;

  /* =======================================
     PAGE INFORMATION
  ======================================= */

  pageTitle = 'DIRECTOR_HR.DASHBOARD';

  roleKey = 'DIRECTOR_HR.ROLE';

  centerName = 'Makao Makuu';

  /* =======================================
     LOADING AND ERRORS
  ======================================= */

  isLoading = false;

  isDownloading = false;

  errorMessage = '';

  private subscriptions = new Subscription();

  /* =======================================
     STATISTICS
  ======================================= */

  stats: DashboardStat[] = [];

  totalCenters = 21;

  totalVehicles = 63;

  operationalVehicles = 43;

  monthlyRequests = 7;

  /* =======================================
     RECENT REQUESTS
  ======================================= */

  recentRequests: RecentRequest[] = [];

  /* =======================================
     VEHICLES
  ======================================= */

  vehicles: DashboardVehicle[] = [];

  /* =======================================
     CONSTRUCTOR
  ======================================= */

  constructor(
    private router: Router
  ) {}

  /* =======================================
     INITIALIZATION
  ======================================= */

  ngOnInit(): void {
    this.loadDashboard();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /* =======================================
     LOAD DASHBOARD
  ======================================= */

  loadDashboard(): void {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      this.loadStatistics();
      this.loadRecentRequests();
      this.loadVehicles();
    } catch (error) {
      console.error(
        'Failed to load Director HR dashboard:',
        error
      );

      this.errorMessage =
        'Unable to load dashboard information.';
    } finally {
      this.isLoading = false;
    }
  }

  /* =======================================
     LOAD STATISTICS
  ======================================= */

  loadStatistics(): void {
    this.stats = [
      {
        icon: 'apartment',
        labelKey: 'DIRECTOR_HR.TOTAL_CENTERS',
        value: this.totalCenters
      },
      {
        icon: 'local_shipping',
        labelKey: 'DIRECTOR_HR.TOTAL_VEHICLES',
        value: this.totalVehicles
      },
      {
        icon: 'check',
        labelKey: 'DIRECTOR_HR.OPERATIONAL',
        value: this.operationalVehicles,
        footerKey:
          'DIRECTOR_HR.OPERATIONAL_PERCENT'
      },
      {
        icon: 'assignment',
        labelKey: 'DIRECTOR_HR.MONTHLY_REQUESTS',
        value: this.monthlyRequests
      }
    ];
  }

  /* =======================================
     LOAD RECENT REQUESTS

     Sample data matching the dashboard.
     Replace with your API response.
  ======================================= */

  loadRecentRequests(): void {
    this.recentRequests = [
      {
        id: 1,
        reference: 'REQ-1001',
        serviceKey:
          'MAINTENANCE_REQUEST.ROUTINE_SERVICE',
        vehicle: 'T 211 XUJ',
        center: 'TARI Makutupora',
        status: 'PENDING',
        requestedAt: '2026-09-15T08:42:00'
      },
      {
        id: 2,
        reference: 'REQ-1002',
        serviceKey:
          'MAINTENANCE_REQUEST.BREAKDOWN_REPAIR',
        vehicle: 'T 211 XUJ',
        center: 'TARI Makutupora',
        status: 'APPROVED',
        requestedAt: '2026-09-15T14:10:00'
      },
      {
        id: 3,
        reference: 'REQ-1003',
        serviceKey:
          'MAINTENANCE_REQUEST.EMERGENCY_SERVICE',
        vehicle: 'T 174 QFR',
        center: 'TARI Makutupora',
        status: 'PENDING',
        requestedAt: '2026-09-16T07:15:00'
      },
      {
        id: 4,
        reference: 'REQ-1004',
        serviceKey:
          'MAINTENANCE_REQUEST.ROUTINE_SERVICE',
        vehicle: 'T 285 MWU',
        center: 'TARI Naliendele',
        status: 'REJECTED',
        requestedAt: '2026-09-16T11:30:00'
      },
      {
        id: 5,
        reference: 'REQ-2001',
        serviceKey:
          'MAINTENANCE_REQUEST.BREAKDOWN_REPAIR',
        vehicle: 'T 137 HSY',
        center: 'TARI HQ',
        status: 'PENDING',
        requestedAt: '2026-09-17T09:00:00'
      },
      {
        id: 6,
        reference: 'REQ-2002',
        serviceKey:
          'MAINTENANCE_REQUEST.ROUTINE_SERVICE',
        vehicle: 'T 137 HSY',
        center: 'TARI HQ',
        status: 'PENDING',
        requestedAt: '2026-09-17T10:30:00'
      }
    ];
  }

  /* =======================================
     LOAD VEHICLES

     Sample data matching the dashboard.
     Replace with your API response.
  ======================================= */

  loadVehicles(): void {
    this.vehicles = [
      {
        id: 1,
        registrationNumber: 'T 137 HSY',
        name: 'Toyota Hilux Double Cabin',
        center: 'TARI HQ',
        status: 'OPERATIONAL',
        checkNumber: 'DR/HQ/101'
      },
      {
        id: 2,
        registrationNumber: 'T 174 QFR',
        name: 'Toyota Hiace (Noah)',
        center: 'TARI HQ',
        status: 'OPERATIONAL',
        checkNumber: 'DR/HQ/102'
      }
    ];
  }

  /* =======================================
     SIDEBAR ACTIONS
  ======================================= */

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  openSidebar(): void {
    this.sidebarOpen = true;
  }

  /* =======================================
     REQUEST STATUS TRANSLATION
  ======================================= */

  getRequestStatusKey(
    status: RequestStatus
  ): string {
    switch (status) {
      case 'PENDING':
        return 'REQUEST_STATUS.PENDING';

      case 'APPROVED':
        return 'REQUEST_STATUS.APPROVED';

      case 'REJECTED':
        return 'REQUEST_STATUS.REJECTED';

      default:
        return 'REQUEST_STATUS.UNKNOWN';
    }
  }

  /* =======================================
     VEHICLE STATUS TRANSLATION
  ======================================= */

  getVehicleStatusKey(
    status: VehicleStatus
  ): string {
    switch (status) {
      case 'OPERATIONAL':
        return 'VEHICLE_STATUS.OPERATIONAL';

      case 'UNDER_SERVICE':
        return 'VEHICLE_STATUS.UNDER_SERVICE';

      case 'INACTIVE':
        return 'VEHICLE_STATUS.INACTIVE';

      default:
        return 'VEHICLE_STATUS.UNKNOWN';
    }
  }

  /* =======================================
     NAVIGATION
  ======================================= */

  viewAllRequests(): void {
    this.router.navigate([
      '/directorhr/requests'
    ]);
  }

  viewAllVehicles(): void {
    this.router.navigate([
      '/directorhr/vehicles'
    ]);
  }

  viewRequest(
    request: RecentRequest
  ): void {
    this.router.navigate([
      '/directorhr/requests',
      request.id
    ]);
  }

  viewVehicle(
    vehicle: DashboardVehicle
  ): void {
    this.router.navigate([
      '/directorhr/vehicles',
      vehicle.id
    ]);
  }

  /* =======================================
     CALCULATED STATISTICS
  ======================================= */

  get operationalPercentage(): number {
    if (this.totalVehicles === 0) {
      return 0;
    }

    return Math.round(
      (
        this.operationalVehicles /
        this.totalVehicles
      ) * 100
    );
  }

  get pendingRequestsCount(): number {
    return this.recentRequests.filter(
      request =>
        request.status === 'PENDING'
    ).length;
  }

  get approvedRequestsCount(): number {
    return this.recentRequests.filter(
      request =>
        request.status === 'APPROVED'
    ).length;
  }

  get rejectedRequestsCount(): number {
    return this.recentRequests.filter(
      request =>
        request.status === 'REJECTED'
    ).length;
  }

  /* =======================================
     DOWNLOAD ALL CENTERS REPORT
  ======================================= */

  downloadAllCentersReport(): void {
    if (this.isDownloading) {
      return;
    }

    this.isDownloading = true;
    this.errorMessage = '';

    try {
      const rows: Array<
        Array<string | number>
      > = [];

      /* REPORT HEADER */

      rows.push([
        'TANZANIA AGRICULTURAL RESEARCH INSTITUTE'
      ]);

      rows.push([
        'VEHICLE MANAGEMENT SYSTEM'
      ]);

      rows.push([
        'DIRECTOR HR DASHBOARD REPORT'
      ]);

      rows.push([
        'Generated At',
        new Date().toLocaleString()
      ]);

      rows.push([]);

      /* STATISTICS */

      rows.push([
        'DASHBOARD STATISTICS'
      ]);

      rows.push([
        'Metric',
        'Value'
      ]);

      rows.push([
        'Total Centers',
        this.totalCenters
      ]);

      rows.push([
        'Total Vehicles',
        this.totalVehicles
      ]);

      rows.push([
        'Operational Vehicles',
        this.operationalVehicles
      ]);

      rows.push([
        'Operational Percentage',
        `${this.operationalPercentage}%`
      ]);

      rows.push([
        'Requests This Month',
        this.monthlyRequests
      ]);

      rows.push([]);

      /* RECENT REQUESTS */

      rows.push([
        'RECENT REQUESTS'
      ]);

      rows.push([
        'Reference',
        'Service Type',
        'Vehicle',
        'Center',
        'Status',
        'Requested At'
      ]);

      this.recentRequests.forEach(
        request => {
          rows.push([
            request.reference,
            request.serviceKey,
            request.vehicle,
            request.center,
            request.status,
            request.requestedAt || ''
          ]);
        }
      );

      rows.push([]);

      /* VEHICLES */

      rows.push([
        'VEHICLES'
      ]);

      rows.push([
        'Registration Number',
        'Model',
        'Center',
        'Status',
        'Check Number'
      ]);

      this.vehicles.forEach(
        vehicle => {
          rows.push([
            vehicle.registrationNumber,
            vehicle.name,
            vehicle.center,
            vehicle.status,
            vehicle.checkNumber || ''
          ]);
        }
      );

      /* GENERATE CSV */

      const csvContent = rows
        .map(row =>
          row
            .map(value =>
              this.escapeCsv(value)
            )
            .join(',')
        )
        .join('\r\n');

      const blob = new Blob(
        ['\uFEFF', csvContent],
        {
          type:
            'text/csv;charset=utf-8;'
        }
      );

      const url =
        URL.createObjectURL(blob);

      const link =
        document.createElement('a');

      const date =
        new Date()
          .toISOString()
          .slice(0, 10);

      link.href = url;

      link.download =
        `TARI_VMS_Director_HR_Report_${date}.csv`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      URL.revokeObjectURL(url);

    } catch (error) {
      console.error(
        'Report download failed:',
        error
      );

      this.errorMessage =
        'Unable to download the report.';
    } finally {
      this.isDownloading = false;
    }
  }

  /* =======================================
     CSV ESCAPING
  ======================================= */

  private escapeCsv(
    value: string | number
  ): string {
    const text = String(
      value ?? ''
    );

    return `"${text.replace(/"/g, '""')}"`;
  }

  /* =======================================
     TRACK BY FUNCTIONS
  ======================================= */

  trackByStat(
    index: number,
    stat: DashboardStat
  ): string {
    return stat.labelKey;
  }

  trackByRequest(
    index: number,
    request: RecentRequest
  ): number {
    return request.id;
  }

  trackByVehicle(
    index: number,
    vehicle: DashboardVehicle
  ): number {
    return vehicle.id;
  }
}