import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Location } from '../models/location.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LocationService {

  constructor(private http:HttpClient) {}

  private locationUrl = 'http://localhost:8070/';

  public getLocations() {
    return this.http.get(this.locationUrl);
  }

  public deleteLocation(location) {
    return this.http.delete(this.locationUrl + "/"+ location.id);
  }

  public createLocation(location) {
    console.log(location)
    return this.http.post(this.locationUrl, location);
  }

}
