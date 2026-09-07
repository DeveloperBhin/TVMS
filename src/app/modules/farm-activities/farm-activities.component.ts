import { Component } from '@angular/core';

@Component({
  selector: 'app-farm-activities',
  templateUrl: './farm-activities.component.html',
  styleUrls: ['./farm-activities.component.scss']
})
export class FarmActivitiesComponent {

  weedingSearch = '';
  harvestingSearch = '';

  weedingActivities = [
    {
      farm: 'Shamba la Mbuyuni',
      date: 'Jan 15,2026',
      cost: 'TZS 40,000/=',
      status: 'Complete'
    }
  ];

  harvestingActivities = [
    {
      farm: 'Shamba la Mbuyuni',
      date: 'Jan 15,2026',
      cost: 'TZS 40,000/=',
      status: 'Complete',
      harvested: '8.3 Kg'
    }
  ];


  get filteredWeedingActivities() {

    const search =
      this.weedingSearch
        .trim()
        .toLowerCase();

    if (!search) {
      return this.weedingActivities;
    }

    return this.weedingActivities.filter(
      activity =>
        activity.farm.toLowerCase().includes(search) ||
        activity.date.toLowerCase().includes(search) ||
        activity.cost.toLowerCase().includes(search) ||
        activity.status.toLowerCase().includes(search)
    );
  }


  get filteredHarvestingActivities() {

    const search =
      this.harvestingSearch
        .trim()
        .toLowerCase();

    if (!search) {
      return this.harvestingActivities;
    }

    return this.harvestingActivities.filter(
      activity =>
        activity.farm.toLowerCase().includes(search) ||
        activity.date.toLowerCase().includes(search) ||
        activity.cost.toLowerCase().includes(search) ||
        activity.status.toLowerCase().includes(search) ||
        activity.harvested.toLowerCase().includes(search)
    );
  }


  addActivity(): void {

    console.log('Add activity');

  }

}