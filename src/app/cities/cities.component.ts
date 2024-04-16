import { Component } from '@angular/core';
import { GetCitiesService } from '../get-cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent {
  cities;
  color;
  constructor(private citiesService: GetCitiesService) {
    this.cities = citiesService.getCities();
    this.color = this.colorIt();
  }
  colorIt() {
    for (var i = 0; i < this.cities.length; i++) {
      if (this.cities[i].attractionSites.length < 3) {
        return false;
      }
    }
    return true;
  }
}
