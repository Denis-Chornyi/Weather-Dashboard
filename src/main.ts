import { bootstrapApplication } from '@angular/platform-browser';
import { WeatherDashboardComponent } from './app/components/weather-dashboard/weather-dashboard.component';
import { appConfig } from './app/app.config';

bootstrapApplication(WeatherDashboardComponent, appConfig)
  .catch(err => console.error(err));