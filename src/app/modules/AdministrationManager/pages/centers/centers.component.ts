
import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface TariCenter {
  id: number;
  name: string;
  location: string;
  vehicles: number;
  operational: number;
  underService: number;
  pendingRequests: number;
}

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.scss']
})
export class CentersComponent {

  sidebarOpen = false;

  // Example data matching the visible screenshot.
  // Replace with the actual centers API response.

  centers: TariCenter[] = [
    {
      id: 1,
      name: 'TARI HQ',
      location: 'Dodoma',
      vehicles: 2,
      operational: 2,
      underService: 0,
      pendingRequests: 2
    },
    {
      id: 2,
      name: 'TARI Makutupora',
      location: 'Dodoma',
      vehicles: 3,
      operational: 1,
      underService: 0,
      pendingRequests: 2
    },
    {
      id: 3,
      name: 'TARI Naliendele',
      location: 'Mtwara',
      vehicles: 4,
      operational: 4,
      underService: 0,
      pendingRequests: 0
    },
    {
      id: 4,
      name: 'TARI Elian',
      location: 'Arusha',
      vehicles: 2,
      operational: 1,
      underService: 0,
      pendingRequests: 0
    },
    {
      id: 5,
      name: 'TARI Maruku',
      location: 'Kagera',
      vehicles: 3,
      operational: 3,
      underService: 0,
      pendingRequests: 0
    },
    {
      id: 6,
      name: 'TARI Tumbi',
      location: 'Tabora',
      vehicles: 4,
      operational: 1,
      underService: 1,
      pendingRequests: 0
    },
    {
      id: 7,
      name: 'TARI Torita',
      location: 'Singida',
      vehicles: 2,
      operational: 2,
      underService: 0,
      pendingRequests: 0
    },
    {
      id: 8,
      name: 'TARI Ilonga',
      location: 'Morogoro',
      vehicles: 3,
      operational: 1,
      underService: 0,
      pendingRequests: 0
    },
    {
      id: 9,
      name: 'TARI Uyole',
      location: 'Mbeya',
      vehicles: 4,
      operational: 4,
      underService: 0,
      pendingRequests: 0
    }
  ];

  constructor(private router: Router) {}

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  viewCenter(center: TariCenter): void {
    this.router.navigate(
      ['/adminmanager/vehicles'],
      {
        queryParams: {
          centerId: center.id
        }
      }
    );
  }
}