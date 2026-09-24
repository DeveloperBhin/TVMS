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
        path: 'drivers',
        loadChildren: () =>
          import('./modules/drivers/drivers.module').then(m => m.DriversModule)
      },
       {
        path: 'supervisor',
        loadChildren: () =>
          import('./modules/centerSupervisor/centerSupervisor.module').then(m => m.CenterSupervisorModule)
      },
      {
        path: 'centerdirector',
        loadChildren: () =>
          import('./modules/centerDirector/centerDirector.module').then(m => m.CenterDirectorModule)
      },
       {
        path: 'TO',
        loadChildren: () =>
          import('./modules/TO/transport-officer.module').then(m => m.TransportOfficerModule)
      },
      {
        path: 'AM',
        loadChildren: () =>
          import('./modules/AdministrationManager/AdministrationManager.module').then(m => m.AdministrationManagerModule)
      },
       {
        path: 'DHRAM',
        loadChildren: () =>
          import('./modules/DHRAM/director-hr.module').then(m => m.DirectorHrModule)
      },
      //  {
      //   path: 'farms',
      //   loadChildren: () =>
      //     import('./modules/farms/farms.module').then(m => m.FarmsModule)
      // },
      // {
      //   path: 'scan',
      //   loadChildren: () =>
      //     import('./modules/farms/farms.module').then(m => m.FarmsModule)
      // },
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
          import('./modules/drivers/drivers.module').then(m => m.DriversModule)
      },
      // {
      //   path: 'farms',
      //   loadChildren: () =>
      //     import('./modules/farms/farms.module').then(m => m.FarmsModule)
      // },
     
      
      
    
      {
        path: 'warehouses',
        loadChildren: () =>
          import('./modules/warehouses/warehouses.module').then(m => m.WarehousesModule)
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
