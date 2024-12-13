import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherData } from "../../models/weather.model";

@Component({
  selector: "app-city-card",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-lg p-6 m-4">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold">{{ weather.name }}</h2>
        <button (click)="onRemove()" class="text-red-500 hover:text-red-700">
          Remove
        </button>
      </div>
      <div class="mt-4">
        <p class="text-4xl font-bold">{{ weather.main.temp }}°C</p>
        <p class="text-gray-600">{{ weather.weather[0].main }}</p>
        <p class="text-sm text-gray-500">
          Feels like: {{ weather.main.feels_like }}°C
        </p>
        <p class="text-sm text-gray-500">
          Humidity: {{ weather.main.humidity }}%
        </p>
      </div>
    </div>
  `,
})
export class CityCardComponent {
  @Input() weather!: WeatherData;
  @Output() remove = new EventEmitter<void>();

  onRemove() {
    this.remove.emit();
  }
}
