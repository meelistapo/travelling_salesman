import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})

export class EsriMapComponent implements OnInit {

  // Private vars with default values
  private _zoom = 8;
  private _center = [25.2, 58.5];
  private _basemap = 'streets';

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: any[]) {
    this._center = center;
  }

  get center(): any[] {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  @Output() mapLoaded = new EventEmitter<boolean>();

  // this is needed to be able to create the MapView at the DOM element in this component
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  constructor() { }

  public ngOnInit() {
    loadModules([
      'esri/Map',
      'esri/views/MapView',
      "esri/geometry/Point",
    ])
      .then(([EsriMap, EsriMapView]) => {

        // Set type for Map constructor properties
        const mapProperties = {
          basemap: this._basemap
        };

        let map = new EsriMap(mapProperties);

        // Set type for MapView constructor properties
        const mapViewProperties = {
          container: this.mapViewEl.nativeElement,
          center: this._center,
          zoom: this._zoom,
          map: map
        };

        let mapView = new EsriMapView(mapViewProperties);

        mapView.when(() => {
          // All the resources in the MapView and the map have loaded. Now execute additional processes
          this.mapLoaded.emit(true);
          // Request the earthquake data from USGS when the view resolves
          // getData()
          //   .then(createGraphics) // then send it to the createGraphics() method
          //   .then(createLayer) // when graphics are created, create the layer
          //   .then(createLegend) // when layer is created, create the legend
          //   .otherwise(errback);
        }, err => {
          console.error(err);
        });
      })
      .catch(err => {
        console.error(err);
      });
    // Request the earthquake data
    // function getData() {
    //
    //   // data downloaded from the USGS at http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/ on 4/4/16
    //   // month.geojson represents recorded earthquakes between 03/04/2016 and 04/04/2016
    //   // week.geojson represents recorded earthquakes betwen 03/28/2016 and 04/04/2016
    //
    //   var url = "data/week.geojson";
    //
    //   return esriRequest(url, {
    //     responseType: "json"
    //   });
    // }


  }
  // var listNode = document.getElementById("nyc_graphics");
  // public addPoints(){
  //   var point = new Point(-106.61, 35.1107);
  //   var pointSymbol = new SimpleMarkerSymbol();
  //   var pointAttributes = { city: "Albuquerque", state: "New Mexico" };
  //   var pointInfoTemplate = new InfoTemplate("Albuquerque");
  //   var pointGraphic = new Graphic(point, pointSymbol, pointAttributes).setInfoTemplate(pointInfoTemplate);
  //
  //   graphicsArray.push(pointGraphic);
  //   function addSomeGraphics() {
  //     for (i = 0; i < graphicsArray.length; ++i) {
  //       map.graphics.add(graphicsArray[i]);
  //     }
  //   }
  // }
}
