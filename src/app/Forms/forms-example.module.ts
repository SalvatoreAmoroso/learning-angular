import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstFormComponent } from './first-form/first-form.component';
import { APPLICATION_VALIDATORS } from './app-validators.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsComponent } from './forms.component';
import { TabModule } from '../ContentInsertion/tabs/tab.module';



@NgModule({
  declarations: [
    FirstFormComponent,
    ReactiveFormComponent,
    APPLICATION_VALIDATORS,
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabModule
  ],
  exports: [
    FirstFormComponent,
    ReactiveFormComponent
  ]
})
export class FormsExampleModule { }
