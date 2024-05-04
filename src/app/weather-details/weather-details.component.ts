import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css',
})
export class WeatherDetailsComponent implements OnInit {
  weather: any = {};
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.weather.name = params.get('name');
      this.weather.springN = params.get('springN');
      this.weather.springM = params.get('springM');
      this.weather.summerN = params.get('summerN');
      this.weather.summerM = params.get('summerM');
      this.weather.winterN = params.get('winterN');
      this.weather.winterM = params.get('winterM');
      this.weather.autumnN = params.get('autumnN');
      this.weather.autumnM = params.get('autumnM');
      this.weather.visitFrom = params.get('visitFrom');
      this.weather.visitTo = params.get('visitTo');
    });
  }
}
