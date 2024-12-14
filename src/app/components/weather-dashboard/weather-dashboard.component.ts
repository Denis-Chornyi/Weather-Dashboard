import { Component, OnInit, inject, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject, takeUntil } from "rxjs";
import { WeatherService } from "../../services/weather.service";
import { StorageService } from "../../services/storage.service";
import { CityCardComponent } from "../city-card/city-card.component";
import { AddCityComponent } from "../add-city/add-city.component";
import { WeatherData } from "../../models/weather.model";

@Component({
  selector: "app-weather-dashboard",
  standalone: true,
  imports: [CommonModule, CityCardComponent, AddCityComponent],
  template: `
    <div class="min-h-screen bg-gray-100 p-4">
      <h1 class="text-3xl font-bold text-center mb-8">Weather Dashboard</h1>
      <router-outlet></router-outlet>
      <app-add-city (cityAdd)="addCity($event)"></app-add-city>

      <div
        *ngIf="error"
        class="text-red-500 text-center my-4 p-4 bg-red-50 rounded"
      >
        {{ error }}
      </div>

      <div *ngIf="loading" class="flex justify-center my-4">
        <div
          class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <app-city-card
          *ngFor="let weather of weatherData"
          [weather]="weather"
          (remove)="removeCity(weather.id)"
        ></app-city-card>
      </div>
    </div>
  `,
})
export class WeatherDashboardComponent implements OnInit, OnDestroy {
  private weatherService = inject(WeatherService);
  private storageService = inject(StorageService);
  private destroy$ = new Subject<void>();

  weatherData: WeatherData[] = [];
  loading = false;
  error = "";

  ngOnInit(): void {
    this.loadSavedCities();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addCity(cityName: string): void {
    this.loading = true;
    this.error = "";

    this.weatherService
      .getWeatherByCity(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: WeatherData) => {
          if (!this.weatherData.some((w) => w.id === data.id)) {
            this.weatherData.push(data);
            this.saveCities();
          } else {
            this.error = "City already exists in the dashboard";
          }
          this.loading = false;
        },
        error: (error: string) => {
          this.error = error;
          this.loading = false;
        },
      });
  }

  removeCity(id: number): void {
    this.weatherData = this.weatherData.filter((w) => w.id !== id);
    this.saveCities();
  }

  private saveCities(): void {
    const cities = this.weatherData.map((w) => w.name);
    this.storageService.saveCities(cities);
  }

  private loadSavedCities(): void {
    const cities = this.storageService.loadCities();
    cities.forEach((city) => this.addCity(city));
  }
}
