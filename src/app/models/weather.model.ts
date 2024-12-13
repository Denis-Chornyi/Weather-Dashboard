export interface WeatherData {
  id: number;
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}


export interface City {
  id: number;
  name: string;
  weather: WeatherData;
}