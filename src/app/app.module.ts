import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneWayPropComponent } from './oneway-prop/oneway-prop.component';
import { EventsComponent } from './events/events.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { LocalvarComponent } from './localvar/localvar.component';
import { MicrosyntaxComponent } from './microsyntax/microsyntax.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputOutputInnerComponent } from './input-output-inner/input-output-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayPropComponent,
    EventsComponent,
    TwowayComponent,
    LocalvarComponent,
    MicrosyntaxComponent,
    InputOutputComponent,
    InputOutputInnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
