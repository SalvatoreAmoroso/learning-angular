import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneWayPropComponent } from './oneway-prop/oneway-prop.component';
import { EventsComponent } from './events/events.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { LocalvarComponent } from './localvar/localvar.component';
import { MicrosyntaxComponent } from './microsyntax/microsyntax.component';
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

@NgModule({
  declarations: [
    AppComponent,
    OneWayPropComponent,
    EventsComponent,
    TwowayComponent,
    LocalvarComponent,
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
    PipesComponent
  ],
  imports: [BrowserModule, FormsModule, PanelModule, TabModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
