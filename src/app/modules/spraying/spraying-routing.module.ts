import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprayingComponent } from './spraying.component';

const routes: Routes = [
  { path: '', component: SprayingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprayingRoutingModule {}
