import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstFormComponent } from './first-form/first-form.component';



@NgModule({
  declarations: [
    FirstFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FirstFormComponent
  ]
})
export class FormsExampleModule { }
