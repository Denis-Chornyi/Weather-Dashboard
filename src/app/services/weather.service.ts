import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { WeatherData } from "../models/weather.model";
import { OpenWeatherResponse } from "../models/api-response.model";
import { environment } from "../config/environment";
import { ErrorHandler } from "../utils/error-handler.util";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<WeatherData> {
    const apiUrl = `${environment.openWeatherMap.apiUrl}&q=${city}`; // Динамічний URL

    return this.http.get<OpenWeatherResponse>(apiUrl).pipe(
      map(
        (response: OpenWeatherResponse): WeatherData => ({
          id: response.location.name.length,
          name: response.location.name,
          main: {
            temp: response.current.temp_c,
            feels_like: response.current.feelslike_c,
            humidity: response.current.humidity,
          },
          weather: [
            {
              main: response.current.condition.text,
              description: response.current.condition.text,
              icon: response.current.condition.icon,
            },
          ],
        })
      ),
      catchError((error: HttpErrorResponse) =>
        throwError(() => ErrorHandler.getErrorMessage(error))
      )
    );
  }
}
