import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionDemoComponent } from './components/general/general.component';
import { DataServiceOne } from './services/data-service.service';
import { ComponentBasedServicesComponent } from './components/component-based-services/component-based-services.component';

@NgModule({
  declarations: [
    DependencyInjectionDemoComponent,
    ComponentBasedServicesComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DataServiceOne //Define all providers for the di system
  ],
  exports: [
    DependencyInjectionDemoComponent
  ]
})
export class DependencyInjectionModule { }
