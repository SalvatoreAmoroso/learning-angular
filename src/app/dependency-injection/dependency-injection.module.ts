import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import { DataService } from './services/data-service.service';



@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DataService //Define all providers for the di system
  ],
  exports: [
    GeneralComponent
  ]
})
export class DependencyInjectionModule { }
