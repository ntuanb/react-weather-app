export interface ForecastDayType {
  date: string;
  weatherCode: string;
  apparentMaxTemperature: number;
  realFeelTemperature: number;
  precipitation: number;
  windspeed: number;
}

export interface ForecastType {
  [key: string]: ForecastDayType
}