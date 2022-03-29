import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedComponent } from './Advanced/advanced.component';
import { ChangeDetectionPerformanceComponent } from './Advanced/change-detection-performance/change-detection-performance.component';
import { RepeaterDemoComponent } from './Advanced/embedded-view/repeater-demo.component';
import { RxJsComponent } from './Advanced/rxjs/rxjs.component';
import { TemplateRefDemoComponent } from './Advanced/template-ref/template-ref-demo/template-ref-demo.component';
import { ViewContainerRefComponent } from './Advanced/view-container-ref/view-container-ref.component';
import { ViewEncapsulationComponent } from './Advanced/view-encapsulation/view-encapsulation.component';
import { ContentInsertionComponent } from './ContentInsertion/contentinsertion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DependencyInjectionDemoComponent } from './DependencyInjection/components/general/general.component';
import { DirectivesComponent } from './Directives/directives.component';
import { EventsComponent } from './EventBinding/events.component';
import { InputOutputBindingComponent } from './InputOutputBinding/input-output-binding.component';
import { OtherComponent } from './Other/other.component';
import { PropBindingComponent } from './PropertyBinding/prop-binding.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
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
    path: 'dependency-injection',
    component: DependencyInjectionDemoComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'advanced',
    component: AdvancedComponent,
    children: [
      {
        path: '',
        redirectTo: 'rxjs',
        pathMatch: 'full'
      },
      {
        path: 'view-encapsulation',
        component: ViewEncapsulationComponent
      },
      {
        path: 'template-ref',
        component: TemplateRefDemoComponent
      },
      {
        path: 'view-container-ref',
        component: ViewContainerRefComponent
      },
      {
        path: 'embedded-view',
        component: RepeaterDemoComponent
      },
      {
        path: 'rxjs',
        component: RxJsComponent
      },
      {
        path: 'change-detection',
        component: ChangeDetectionPerformanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
