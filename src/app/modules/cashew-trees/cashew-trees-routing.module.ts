import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashewTreesComponent } from './cashew-trees.component';

const routes: Routes = [
  { path: '', component: CashewTreesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashewTreesRoutingModule {}
