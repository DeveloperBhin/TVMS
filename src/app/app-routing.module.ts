import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./sessions/sessions.module').then(m => m.SessionsModule)
  },
    {
        path: 'farmers',
        loadChildren: () =>
          import('./modules/farmers/farmers.module').then(m => m.FarmersModule)
      },
       {
        path: 'farms',
        loadChildren: () =>
          import('./modules/farms/farms.module').then(m => m.FarmsModule)
      },
      // {
      //   path: 'scan',
      //   loadChildren: () =>
      //     import('./modules/farms/farms.module').then(m => m.FarmsModule)
      // },
        {
        path: 'cashew-trees',
        loadChildren: () =>
          import('./modules/cashew-trees/cashew-trees.module').then(m => m.CashewTreesModule)
      },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'farmers',
        loadChildren: () =>
          import('./modules/farmers/farmers.module').then(m => m.FarmersModule)
      },
      {
        path: 'farms',
        loadChildren: () =>
          import('./modules/farms/farms.module').then(m => m.FarmsModule)
      },
      {
        path: 'cashew-trees',
        loadChildren: () =>
          import('./modules/cashew-trees/cashew-trees.module').then(m => m.CashewTreesModule)
      },
      {
        path: 'farm-activities',
        loadChildren: () =>
          import('./modules/farm-activities/farm-activities.module').then(m => m.FarmActivitiesModule)
      },
      {
        path: 'production-plans',
        loadChildren: () =>
          import('./modules/production-plans/production-plans.module').then(m => m.ProductionPlansModule)
      },
      {
        path: 'input-management',
        loadChildren: () =>
          import('./modules/input-management/input-management.module').then(m => m.InputManagementModule)
      },
      {
        path: 'disease-management',
        loadChildren: () =>
          import('./modules/disease-management/disease-management.module').then(m => m.DiseaseManagementModule)
      },
      {
        path: 'spraying',
        loadChildren: () =>
          import('./modules/spraying/spraying.module').then(m => m.SprayingModule)
      },
      {
        path: 'harvesting',
        loadChildren: () =>
          import('./modules/harvesting/harvesting.module').then(m => m.HarvestingModule)
      },
      {
        path: 'post-harvest',
        loadChildren: () =>
          import('./modules/post-harvest/post-harvest.module').then(m => m.PostHarvestModule)
      },
      {
        path: 'production',
        loadChildren: () =>
          import('./modules/production/production.module').then(m => m.ProductionModule)
      },
      {
        path: 'warehouses',
        loadChildren: () =>
          import('./modules/warehouses/warehouses.module').then(m => m.WarehousesModule)
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('./modules/sales/sales.module').then(m => m.SalesModule)
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./modules/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./modules/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
