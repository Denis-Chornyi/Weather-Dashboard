export interface OpenWeatherResponse {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
