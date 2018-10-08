import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { ToolDigitaltvModificationComponent } from './digitaltv-modification/digitaltv-modification.component';

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    ToolDigitaltvModificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
