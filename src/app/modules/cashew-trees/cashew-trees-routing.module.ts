// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { CashewTreesComponent } from './cashew-trees.component';

// const routes: Routes = [
//   { path: '', component: CashewTreesComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CashewTreesRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CashewTreesComponent } from './cashew-trees.component';
import { RegisterTreeComponent } from './register-tree/register-tree.component';
import { ScanTreeComponent } from './scan-tree/scan-tree.component';

const routes: Routes = [

  {
    path: '',
    component: CashewTreesComponent
  },

  {
    path: 'register',
    component: RegisterTreeComponent
  },
   {
    path: 'scan',
    component: ScanTreeComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class CashewTreesRoutingModule {}