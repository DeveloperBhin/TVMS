import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CashewTreesRoutingModule } from './cashew-trees-routing.module';
import { CashewTreesComponent } from './cashew-trees.component';
import { RegisterTreeComponent } from './register-tree/register-tree.component';
import { ScanTreeComponent } from './scan-tree/scan-tree.component';

@NgModule({
  declarations: [CashewTreesComponent, RegisterTreeComponent, ScanTreeComponent],
  imports: [SharedModule, CashewTreesRoutingModule]
})
export class CashewTreesModule {}
