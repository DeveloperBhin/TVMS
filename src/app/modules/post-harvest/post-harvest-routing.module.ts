import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostHarvestComponent } from './post-harvest.component';

const routes: Routes = [
  { path: '', component: PostHarvestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostHarvestRoutingModule {}
