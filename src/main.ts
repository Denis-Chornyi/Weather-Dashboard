import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { appConfig } from "./app/app.config";
import { routes } from "./app/routes";
import { WeatherDashboardComponent } from "app/components/weather-dashboard/weather-dashboard.component";

bootstrapApplication(WeatherDashboardComponent, {
  ...appConfig,
  providers: [provideRouter(routes), ...appConfig.providers],
}).catch((err) => console.error(err));
