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

const routes: Routes = [

  {
    path: '',
    component: CashewTreesComponent
  },

  {
    path: 'register',
    component: RegisterTreeComponent
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