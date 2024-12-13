import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-city',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex gap-4 p-4">
      <input
        type="text"
        [(ngModel)]="cityName"
        (keyup.enter)="addCity()"
        placeholder="Enter city name"
        class="flex-1 p-2 border rounded"
      />
      <button
        (click)="addCity()"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        [disabled]="!cityName"
      >
        Add City
      </button>
    </div>
  `
})
export class AddCityComponent {
  @Output() cityAdd = new EventEmitter<string>();
  cityName = '';

  addCity() {
    if (this.cityName.trim()) {
      this.cityAdd.emit(this.cityName);
      this.cityName = '';
    }
  }
}