import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstFormComponent } from './first-form/first-form.component';
import { APPLICATION_VALIDATORS } from './app-validators.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    FirstFormComponent,
    ReactiveFormComponent,
    APPLICATION_VALIDATORS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FirstFormComponent,
    ReactiveFormComponent
  ]
})
export class FormsExampleModule { }
