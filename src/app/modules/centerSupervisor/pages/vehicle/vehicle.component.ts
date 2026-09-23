import { Component } from '@angular/core';

interface Vehicle {
  registrationNumber: string;
  chassisNumber: string;

  model: string;
  year: number;

  mileage: number;

  status:
    | 'OPERATIONAL'
    | 'UNDER_SERVICE';

  statusDescription?: string;

  center: string;
  checkNumber: string;
}

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehiclesComponent {

  sidebarOpen = false;

  searchTerm = '';

  vehicles: Vehicle[] = [

    {
      registrationNumber: 'T 211 XUJ',
      chassisNumber: 'JTABC02QB7TZ1633',

      model: 'Mitsubishi Pajero Sport',
      year: 2019,

      mileage: 33962,

      status: 'OPERATIONAL',

      center: 'TARI Makutupora',

      checkNumber: 'DR/MKT/014'
    },

    {
      registrationNumber: 'T 248 EHB',
      chassisNumber: 'JTABCD2XD0TZ1844',

      model: 'Toyota Coaster (Basi)',
      year: 2020,

      mileage: 38289,

      status: 'UNDER_SERVICE',

      statusDescription:
        'Ajali ndogo barabarani',

      center: 'TARI Makutupora',

      checkNumber: 'DR/MAK/107'
    },

    {
      registrationNumber: 'T 285 MWU',
      chassisNumber: 'JTABCD34ETTZ2055',

      model: 'Toyota Land Cruiser Hardtop',
      year: 2021,

      mileage: 42616,

      status: 'UNDER_SERVICE',

      statusDescription:
        'Matengenezo ya kawaida (service)',

      center: 'TARI Makutupora',

      checkNumber: 'DR/MAK/108'
    }

  ];

  filteredVehicles: Vehicle[] = [
    ...this.vehicles
  ];


  toggleSidebar(): void {
    this.sidebarOpen =
      !this.sidebarOpen;
  }


  closeSidebar(): void {
    this.sidebarOpen = false;
  }


  filterVehicles(): void {

    const search =
      this.searchTerm
        .trim()
        .toLowerCase();

    if (!search) {

      this.filteredVehicles = [
        ...this.vehicles
      ];

      return;
    }


    this.filteredVehicles =
      this.vehicles.filter(
        vehicle => {

          return (

            vehicle.registrationNumber
              .toLowerCase()
              .includes(search)

            ||

            vehicle.chassisNumber
              .toLowerCase()
              .includes(search)

            ||

            vehicle.model
              .toLowerCase()
              .includes(search)

            ||

            vehicle.center
              .toLowerCase()
              .includes(search)

            ||

            vehicle.checkNumber
              .toLowerCase()
              .includes(search)

          );

        }
      );

  }


  getStatusTranslation(
    status: Vehicle['status']
  ): string {

    switch (status) {

      case 'OPERATIONAL':
        return 'VEHICLES.OPERATIONAL';

      case 'UNDER_SERVICE':
        return 'VEHICLES.UNDER_SERVICE';

      default:
        return '';
    }

  }

}