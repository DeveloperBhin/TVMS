import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CashewTreesRoutingModule } from './cashew-trees-routing.module';
import { CashewTreesComponent } from './cashew-trees.component';

@NgModule({
  declarations: [CashewTreesComponent],
  imports: [SharedModule, CashewTreesRoutingModule]
})
export class CashewTreesModule {}
