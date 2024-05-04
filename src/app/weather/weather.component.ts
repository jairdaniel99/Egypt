import { Component } from '@angular/core';
import { GetweatherService } from '../getweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  weatherData: any;
  constructor(private _weatherdata: GetweatherService) {
    this.weatherData = this._weatherdata.getWeather();
  }
}
