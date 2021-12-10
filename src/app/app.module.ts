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
  ],
  imports: [BrowserModule, FormsModule, PanelModule, TabModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
