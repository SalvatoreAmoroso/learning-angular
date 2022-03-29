import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent, TabsComponent } from './tabs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabComponent, TabsComponent],
  exports: [TabComponent, TabsComponent],
})
export class TabModule {}
