import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentInsertionComponent } from './contentinsertion.component';
import { CiSingleComponent } from './ci-single/ci-single.component';
import { CiMultipleComponent } from './ci-multiple/ci-multiple.component';
import { PanelHeaderDirective } from './panel-header.directive';
import { TabModule } from './tabs/tab.module';

@NgModule({
  declarations: [
    ContentInsertionComponent,
    CiSingleComponent,
    CiMultipleComponent,
    PanelHeaderDirective,
  ],
  imports: [CommonModule, TabModule],
  exports: [
    ContentInsertionComponent,
    CiSingleComponent,
    CiMultipleComponent,
    PanelHeaderDirective,
  ],
})
export class PanelModule {}
