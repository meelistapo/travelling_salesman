import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '../models/location.model';
import { LocationService } from './location.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locations;

  constructor(private router: Router, private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(
      data => { this.locations = data},
          err => console.error(err), () => console.log('done loading locations'+ this.locations));
  }

  deleteLocation(location: Location): void {
    this.locationService.deleteLocation(location)
      .subscribe( data => {
        this.locations = this.locations.filter(loc => loc !== location);
      })
  };
}
