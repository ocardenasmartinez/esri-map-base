import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsriMapComponent } from './esri-map/esri-map.component';

const routes: Routes = [
  { path: 'map', component: EsriMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
