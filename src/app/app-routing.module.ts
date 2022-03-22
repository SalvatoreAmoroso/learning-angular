import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentInsertionComponent } from './ContentInsertion/contentinsertion.component';
import { DirectivesComponent } from './Directives/directives.component';
import { EventsComponent } from './EventBinding/events.component';
import { InputOutputBindingComponent } from './InputOutputBinding/input-output-binding.component';
import { OtherComponent } from './Other/other.component';
import { PropBindingComponent } from './PropertyBinding/prop-binding.component';

const routes: Routes = [
  {
    path: 'property-binding',
    component: PropBindingComponent
  },
  {
    path: 'event-binding',
    component: EventsComponent
  },
  {
    path: 'other',
    component: OtherComponent
  },
  {
    path: 'input-output-binding',
    component: InputOutputBindingComponent
  },
  {
    path: 'content-insertion',
    component: ContentInsertionComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
