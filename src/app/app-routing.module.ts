import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherComponent } from './weather/weather.component';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo',
    component: WeatherDetailsComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'cities',
    component: CitiesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
