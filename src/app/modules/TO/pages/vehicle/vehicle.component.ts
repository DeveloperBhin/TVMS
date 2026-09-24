
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, startWith } from 'rxjs';

type VehicleStatus =
  | 'OPERATIONAL'
  | 'UNDER_SERVICE'
  | 'INACTIVE';

interface Vehicle {
  id: number;
  registrationNumber: string;
  chassisNumber: string;
  model: string;
  year: number;
  mileage: number;
  status: VehicleStatus;
  statusDescription?: string;
  center: string;
  checkNumber: string;
}

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehiclesComponent implements OnInit {
  sidebarOpen = false;

  readonly searchControl =
    new FormControl('', { nonNullable: true });

  readonly centerControl =
    new FormControl('TARI HQ', {
      nonNullable: true
    });

  readonly centers: string[] = [
    'TARI HQ',
    'TARI Makutupora',
    'TARI Naliendele',
    'TARI Elian',
    'TARI Maruku',
    'TARI Tumbi',
    'TARI Torita',
    'TARI Ilonga',
    'TARI Uyole',
    'TARI Ukiriguru',
    'TARI Mlingano',
    'TARI Hombolo',
    'TARI Chambezi',
    'TARI Mikocheni',
    'TARI Kilosa',
    'TARI Tanga',
    'TARI Kibaha',
    'TARI Mtawa',
    'TARI Kigoma'
  ];

  // Demonstration records. Replace with API data.
  vehicles: Vehicle[] = [
    {
      id: 1,
      registrationNumber: 'T 137 HSY',
      chassisNumber: 'JTABCD2C7LTZ1211',
      model: 'Toyota Hilux Double Cabin',
      year: 2014,
      mileage: 12327,
      status: 'OPERATIONAL',
      center: 'TARI HQ',
      checkNumber: 'DR/HQ/101'
    },
    {
      id: 2,
      registrationNumber: 'T 174 QFR',
      chassisNumber: 'JTABCD2J9ETZ1422',
      model: 'Toyota Hiace (Noah)',
      year: 2015,
      mileage: 16654,
      status: 'OPERATIONAL',
      center: 'TARI HQ',
      checkNumber: 'DR/HQ/102'
    },
    {
      id: 3,
      registrationNumber: 'T 211 XUJ',
      chassisNumber: 'JTABCD2QB7TZ1633',
      model: 'Mitsubishi Pajero Sport',
      year: 2019,
      mileage: 33962,
      status: 'OPERATIONAL',
      center: 'TARI Makutupora',
      checkNumber: 'DR/MKT/014'
    },
    {
      id: 4,
      registrationNumber: 'T 248 EHB',
      chassisNumber: 'JTABCD2XDTZ1844',
      model: 'Toyota Coaster (Basi)',
      year: 2020,
      mileage: 38289,
      status: 'UNDER_SERVICE',
      statusDescription:
        'VEHICLES.MINOR_REPAIR',
      center: 'TARI Makutupora',
      checkNumber: 'DR/MAK/107'
    },
    {
      id: 5,
      registrationNumber: 'T 285 MWU',
      chassisNumber: 'JTABCD34ETTZ2055',
      model: 'Toyota Land Cruiser Hardtop',
      year: 2021,
      mileage: 42616,
      status: 'UNDER_SERVICE',
      statusDescription:
        'VEHICLES.ROUTINE_SERVICE',
      center: 'TARI Makutupora',
      checkNumber: 'DR/MAK/108'
    }
  ];

  filteredVehicles: Vehicle[] = [];

  ngOnInit(): void {
    combineLatest([
      this.searchControl.valueChanges.pipe(
        startWith(this.searchControl.value)
      ),
      this.centerControl.valueChanges.pipe(
        startWith(this.centerControl.value)
      )
    ]).subscribe(([search, center]) => {
      this.filterVehicles(search, center);
    });
  }

  filterVehicles(
    search = this.searchControl.value,
    center = this.centerControl.value
  ): void {
    const query = search.trim().toLowerCase();

    this.filteredVehicles = this.vehicles.filter(
      vehicle => {
        const matchesCenter =
          vehicle.center === center;

        const searchableText = [
          vehicle.registrationNumber,
          vehicle.chassisNumber,
          vehicle.model,
          vehicle.year,
          vehicle.checkNumber,
          vehicle.center
        ]
          .join(' ')
          .toLowerCase();

        return matchesCenter &&
          searchableText.includes(query);
      }
    );
  }

  getStatusTranslation(
    status: VehicleStatus
  ): string {
    const keys: Record<VehicleStatus, string> = {
      OPERATIONAL: 'VEHICLES.OPERATIONAL',
      UNDER_SERVICE: 'VEHICLES.UNDER_SERVICE',
      INACTIVE: 'VEHICLES.INACTIVE'
    };

    return keys[status];
  }

  downloadVehicles(): void {
    const headers = [
      'Registration Number',
      'Chassis Number',
      'Model',
      'Year',
      'Mileage (KM)',
      'Status',
      'Center',
      'Check Number'
    ];

    const rows = this.filteredVehicles.map(v => [
      v.registrationNumber,
      v.chassisNumber,
      v.model,
      v.year,
      v.mileage,
      v.status,
      v.center,
      v.checkNumber
    ]);

    // Quote CSV values safely.
    const escapeCsv = (value: unknown): string => {
      const text = String(value ?? '');
      return `"${text.replace(/"/g, '""')}"`;
    };

    const csv = [headers, ...rows]
      .map(row => row.map(escapeCsv).join(','))
      .join('\r\n');

    const blob = new Blob(
      ['\uFEFF', csv],
      { type: 'text/csv;charset=utf-8;' }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download =
      `tari-vehicles-${this.centerControl.value
        .replace(/\s+/g, '-')
        .toLowerCase()}.csv`;

    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
}