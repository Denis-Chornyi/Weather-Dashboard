// import { ApplicationConfig } from '@angular/core';
// import { provideHttpClient } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideHttpClient(),
//     provideAnimations()
//   ]
// };
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './routes'; // Імпортуємо маршрути з routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes, withComponentInputBinding()) // Додаємо маршрути
  ]
};
