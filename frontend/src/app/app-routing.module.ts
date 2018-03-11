import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location/location.component';
import { AddLocationComponent } from './location/add-location.component';

const routes: Routes = [
  { path: 'locations', component: LocationComponent },
  { path: 'add', component: AddLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
