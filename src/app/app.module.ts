import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsComponent } from './EventBinding/events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MicrosyntaxComponent } from './Other/microsyntax/microsyntax.component';
import { IO1Component } from './InputOutputBinding/io1/io1.component';
import { IO1InnerComponent } from './InputOutputBinding/io1-inner/io1-inner.component';
import { Io2Component } from './InputOutputBinding/io2/io2.component';
import { Io2InnerComponent } from './InputOutputBinding/io2-inner/io2-inner.component';
import { PanelModule } from './ContentInsertion/panel.module';
import { TabModule } from './ContentInsertion/tabs/tab.module';
import { DirectivesComponent } from './Directives/directives.component';
import { BorderDirective } from './Directives/border.directive';
import { LowerCaseDirective } from './Directives/lower-case-directive.directive';
import { SliderDirective } from './Directives/slider-directive.directive';
import { PanelComponent } from './Directives/panel/panel.component';
import { AccordionDirective } from './Directives/panel/accordion.directive';
import { PanelDemoComponent } from './Directives/panel-demo/panel-demo.component';
import { ViewEncapsulationComponent } from './Advanced/view-encapsulation/view-encapsulation.component';
import { TemplateRefComponent } from './Advanced/template-ref/template-ref.component';
import { TemplateRefDemoComponent } from './Advanced/template-ref/template-ref-demo/template-ref-demo.component';
import { ViewContainerRefComponent, CircleComponent, SquareComponent } from './Advanced/view-container-ref/view-container-ref.component';
import { RepeaterDirective } from './Advanced/embedded-view/repeater.directive';
import { RepeaterDemoComponent } from './Advanced/embedded-view/repeater-demo.component';
import { ChangeDetectionPerformanceComponent, ContactListComponent, ContactEntryComponent } from './Advanced/change-detection-performance/change-detection-performance.component';
import { ChangeDetectionPerformanceOptimizedComponent, ContactListOptimizedComponent, ContactEntryOptimizedComponent } from './Advanced/change-detection-performance-optimized/change-detection-performance-optimized.component';
import { StandardDirectivesComponent } from './StandardFunctions/standard-directives/standard-directives.component';
import { PipesComponent } from './StandardFunctions/pipes/pipes.component';
import { CentimeterPipe } from './StandardFunctions/pipes/centimeter.pipe';
import { PureVsImpurePipe } from './StandardFunctions/pipes/pure-vs-impure.pipe';
import { DependencyInjectionModule } from './DependencyInjection/dependency-injection.module';
import { FormsExampleModule } from './Forms/forms-example.module';
import { AppRoutingComponents, RoutingExampleRoutingModule } from './Routing/routing.module';
import { DashboardComponent } from './Routing/dashboard/dashboard.component';
import { SettingsComponent } from './Routing/settings/settings.component';
import { AboutComponent } from './Routing/about/about.component';
import { RxJsComponent } from './Advanced/rxjs/rxjs.component';
import { SubjectsComponent } from './Advanced/rxjs/subjects/subjects.component';
import { OperatorsComponent } from './Advanced/rxjs/operators/operators.component';
import { PropBindingComponent } from './PropertyBinding/prop-binding.component';
import { OtherComponent } from './Other/other.component';
import { LocalVarComponent } from './Other/localvar/localvar.component';
import { InputOutputBindingComponent } from './InputOutputBinding/input-output-binding.component';
import { AppRoutingModule } from './app-routing.module';
import { AdvancedComponent } from './Advanced/advanced.component';
import { StandardFunctionsComponent } from './StandardFunctions/standard-functions.component';
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
    LowerCaseDirective,
    SliderDirective,
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
    RxJsComponent,
    SubjectsComponent,
    OperatorsComponent,
    PropBindingComponent,
    OtherComponent,
    InputOutputBindingComponent,
    AdvancedComponent,
    StandardFunctionsComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, PanelModule, TabModule, DependencyInjectionModule, FormsExampleModule, RoutingExampleRoutingModule, AppRoutingModule],
  providers: [], //Define global services here as a singleton (RootInjector)
  bootstrap: [AppComponent]
})
export class AppModule { }
