import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // Set our map properties
  mapCenter = [32.4194, 57.7749];
  basemapType = 'satellite';
  mapZoomLevel = 11;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
  public _opened: boolean = true;

  toggleSidebar() {
    this._opened = !this._opened;
    let sidebar = document.getElementById("mapContainer");
    console.log(sidebar)
    if(sidebar.className === "wide"){
      sidebar.setAttribute("class","narrow");
    }
    else{
      sidebar.setAttribute("class","wide");
    }
  }
}
