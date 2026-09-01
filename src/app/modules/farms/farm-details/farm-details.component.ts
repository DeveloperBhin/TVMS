import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent {

  farmId: string | null = null;

  farm = {
    id: 'FM-0001',
    name: 'Shamba la Mbuyuni',
    size: 10,
    age: 5,
    type: 'Existing Farm',
    totalProduction: 250,
    availableTrees: 500,
    averageProduction: 23
  };

  productionHistory = [
    {
      year: 2025,
      production: 245
    },
    {
      year: 2024,
      production: 248
    },
    {
      year: 2023,
      production: 243
    }
  ];

  constructor(
    private route: ActivatedRoute
  ) {
    this.farmId = this.route.snapshot.paramMap.get('id');
  }
}