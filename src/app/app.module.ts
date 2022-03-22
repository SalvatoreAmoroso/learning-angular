import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsComponent } from './EventBinding/events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MicrosyntaxComponent } from './Other/microsyntax/microsyntax.component';
import { IO1Component } from './io1/io1.component';
import { IO1InnerComponent } from './io1-inner/io1-inner.component';
import { Io2Component } from './io2/io2.component';
import { Io2InnerComponent } from './io2-inner/io2-inner.component';
import { PanelModule } from './contentinsertion/panel.module';
import { TabModule } from './contentinsertion/tabs/tab.module';
import { DirectivesComponent } from './directives/directives.component';
import { BorderDirective } from './directives/border.directive';
import { LowerCaseDirectiveDirective } from './directives/lower-case-directive.directive';
import { SliderDirectiveDirective } from './directives/slider-directive.directive';
import { PanelComponent } from './panel/panel.component';
import { AccordionDirective } from './panel/accordion.directive';
import { PanelDemoComponent } from './panel-demo/panel-demo.component';
import { ViewEncapsulationComponent } from './Advanced/view-encapsulation/view-encapsulation.component';
import { TemplateRefComponent } from './Advanced/template-ref/template-ref.component';
import { TemplateRefDemoComponent } from './Advanced/template-ref/template-ref-demo/template-ref-demo.component';
import { ViewContainerRefComponent, CircleComponent, SquareComponent } from './Advanced/view-container-ref/view-container-ref.component';
import { RepeaterDirective } from './Advanced/repeater-demo/repeater.directive';
import { RepeaterDemoComponent } from './Advanced/repeater-demo/repeater-demo.component';
import { ChangeDetectionPerformanceComponent, ContactListComponent, ContactEntryComponent } from './Advanced/change-detection-performance/change-detection-performance.component';
import { ChangeDetectionPerformanceOptimizedComponent, ContactListOptimizedComponent, ContactEntryOptimizedComponent } from './Advanced/change-detection-performance-optimized/change-detection-performance-optimized.component';
import { StandardDirectivesComponent } from './StandardFunctions/standard-directives/standard-directives.component';
import { PipesComponent } from './StandardFunctions/pipes/pipes.component';
import { CentimeterPipe } from './StandardFunctions/pipes/centimeter.pipe';
import { PureVsImpurePipe } from './StandardFunctions/pipes/pure-vs-impure.pipe';
import { DependencyInjectionModule } from './dependency-injection/dependency-injection.module';
import { FormsExampleModule } from './Forms/forms-example.module';
import { AppRoutingComponents, AppRoutingModule } from './Routing/app-routing.module';
import { DashboardComponent } from './Routing/dashboard/dashboard.component';
import { SettingsComponent } from './Routing/settings/settings.component';
import { AboutComponent } from './Routing/about/about.component';
import { RxjsComponent } from './Advanced/rxjs/rxjs.component';
import { SubjectsComponent } from './Advanced/rxjs/subjects/subjects.component';
import { OperatorsComponent } from './Advanced/rxjs/operators/operators.component';
import { PropBindingComponent } from './PropertyBinding/prop-binding.component';
import { OtherComponent } from './Other/other.component';
import { LocalVarComponent } from './Other/localvar/localvar.component';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LocalVarComponent,
    MicrosyntaxComponent,
    IO1Component,
    IO1InnerComponent,
    Io2Component,
    Io2InnerComponent,
    DirectivesComponent,
    BorderDirective,
    LowerCaseDirectiveDirective,
    SliderDirectiveDirective,
    PanelComponent,
    AccordionDirective,
    PanelDemoComponent,
    ViewEncapsulationComponent,
    TemplateRefComponent,
    TemplateRefDemoComponent,
    ViewContainerRefComponent,
    CircleComponent,
    SquareComponent,
    RepeaterDirective,
    RepeaterDemoComponent,
    ChangeDetectionPerformanceComponent,
    ContactListComponent,
    ContactEntryComponent,
    ChangeDetectionPerformanceOptimizedComponent,
    ContactListOptimizedComponent,
    ContactEntryOptimizedComponent,
    StandardDirectivesComponent,
    PipesComponent,
    CentimeterPipe,
    PureVsImpurePipe,
    DashboardComponent,
    SettingsComponent,
    AboutComponent,
    AppRoutingComponents,
    RxjsComponent,
    SubjectsComponent,
    OperatorsComponent,
    PropBindingComponent,
    OtherComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, PanelModule, TabModule, DependencyInjectionModule, FormsExampleModule, AppRoutingModule],
  providers: [], //Define global services here as a singleton (RootInjector)
  bootstrap: [AppComponent]
})
export class AppModule { }
