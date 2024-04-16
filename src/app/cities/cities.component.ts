import { Component } from '@angular/core';
import { GetCitiesService } from '../get-cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent {
  cities;
  constructor(private citiesService: GetCitiesService) {
    this.cities = citiesService.getCities();
  }
}
