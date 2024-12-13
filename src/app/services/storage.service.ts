import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly CITIES_KEY = 'weatherCities';

  saveCities(cities: string[]): void {
    localStorage.setItem(this.CITIES_KEY, JSON.stringify(cities));
  }

  loadCities(): string[] {
    const cities = localStorage.getItem(this.CITIES_KEY);
    return cities ? JSON.parse(cities) : [];
  }
}