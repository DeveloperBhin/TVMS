import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { NewRequestComponent } from './pages/new_request/new_request.component';

const routes: Routes = [
  { path: '', component: DriversComponent },
    { path: 'request', component: NewRequestComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule {}
