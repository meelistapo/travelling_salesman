import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import {LocationService} from './location/location.service';
import {HttpClientModule} from "@angular/common/http";
import {AddLocationComponent} from './location/add-location.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    AddLocationComponent,
    EsriMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    FormsModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
