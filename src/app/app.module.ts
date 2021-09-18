import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneWayPropComponent } from './oneway-prop/oneway-prop.component';
import { EventsComponent } from './events/events.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { LocalvarComponent } from './localvar/localvar.component';
import { MicrosyntaxComponent } from './microsyntax/microsyntax.component';
import { IO1Component } from './io-1/io-1.component';
import { IO1InnerComponent } from './io-1-inner/io-1-inner.component';

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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
